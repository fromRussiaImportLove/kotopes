import pandas as pd
import re
import json


def categorize(str):
    if 'Кото' in str:
        return "cat"
    if 'Пёсо' in str:
        return "dog"
    else:
        return "else"


def fcalc(data):
    df_prices = pd.DataFrame.from_records(data)

    df_prices.columns = ['user_id', 'shelter', 'date', 'item', 'price']
    df_prices['date'] = pd.to_datetime(df_prices['date'])
    df_prices['type'] = df_prices['item'].apply(categorize)

    df_prices_cats = df_prices[df_prices['type'] == 'cat'].copy()
    df_prices_cats['item'] = df_prices_cats['item'].apply(lambda x: re.sub(r"\d+", "", x).strip().lower())
    df_prices_cats = df_prices_cats[df_prices_cats['item'] != 'новогодний котонабор']

    df_shelters = df_prices_cats.groupby('shelter')['price'].sum().reset_index()
    df_shelters['sales_amount'] = df_prices_cats.groupby('shelter')['user_id'].count().reset_index()['user_id']
    df_shelters['price_per_sale'] = df_shelters['price'] / df_shelters['sales_amount']

    days = []
    week = []
    month = []
    sdays = []
    sweeks = []
    for i in df_shelters['shelter'].to_list():
        d = df_prices_cats[(df_prices_cats['shelter'] == i) & (df_prices_cats['item'] == 'котодень')]['price'].median()
        w = df_prices_cats[(df_prices_cats['shelter'] == i) & (df_prices_cats['item'] == 'котонеделя')][
            'price'].median()
        m = df_prices_cats[(df_prices_cats['shelter'] == i) & (df_prices_cats['item'] == 'котомесяц')]['price'].median()
        sd = df_prices_cats[(df_prices_cats['shelter'] == i) & (df_prices_cats['item'] == 'котодень')]['price'].sum()
        sw = df_prices_cats[(df_prices_cats['shelter'] == i) & (df_prices_cats['item'] == 'котонеделя')][
            'price'].sum()
        days.append(d)
        week.append(w)
        month.append(m)
        sdays.append(sd)
        sweeks.append(sw)
    df_shelters['day'] = days
    df_shelters['week'] = week
    df_shelters['month'] = month
    df_shelters['sday'] = sdays
    df_shelters['sweek'] = sweeks
    df_shelters['smonth'] = df_shelters['price'] - df_shelters['sweek']- df_shelters['sday']
    return df_shelters.to_json(orient="records", force_ascii=False)


def ncalc(x, n_sales):
    day = x + 53
    week = (day - 30) * 7
    month = x * 30
    sday = day * 0.9 * n_sales
    sweek = week * 0.09 * n_sales
    smonth = month * 0.01 * n_sales
    nprice = sday + sweek + smonth
    nprice_per_sale = nprice / n_sales
    return json.dumps({'nday': day, 'nweek': week, 'nmonth': month,
                       'nprice': nprice, 'nprice_per_sale': nprice_per_sale, 'sday' : sday,
                       'sweek' : sweek, 'smonth' : smonth
                      })
