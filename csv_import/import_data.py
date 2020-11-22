import csv
from api.models import Payments


def import_payments():
    file = 'csv_import/Teddy Food Ценообразование.csv'
    with open(file) as f:
            awaiting_header = '"Идентификатор пользователя","Название приюта","Дата/время платежа","Наименование услуги","Сумма платежа"'
            header = f.readline()
            print(header)
            if header.rstrip() == awaiting_header:
                reader = csv.reader(f)
                for row in reader:
                    obj, created = Payments.objects.get_or_create(
                    user_id=row[0],
                    shelter=row[1],
                    datetime=row[2],
                    item=row[3],
                    amount=row[4],
                    )
                return 'ok'
            else:
                return 'failed format'

