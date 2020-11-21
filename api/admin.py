from django.contrib import admin

from .models import Payments, Animals, Transactions


class PaymentsAdmin(admin.ModelAdmin):
    list_display = ('pk', 'user_id', 'shelter', 'datetime', 'item', 'amount')
    search_fields = ('item', 'shelter')
    list_filter = ('shelter', 'user_id', 'item', 'datetime')
    empty_value_display = '-пусто-'


class AnimalsAdmin(admin.ModelAdmin):
    list_display = ('pk', 'id', 'name', 'profile_link', 'shelter', 'city', 'breed',
                    'kind', 'birthday', 'gender', 'counter_favorite',
                    'counter_home', 'counter_take', 'counter_walking')
    list_filter = ('name', 'shelter', 'city', 'breed', 'kind', 'gender')
    empty_value_display = '-пусто-'


class TransactionsAdmin(admin.ModelAdmin):
    list_display = ('pk', 'animal', 'name', 'amount', 'datetime', 'order_id')
    list_filter = ('animal', 'name', 'datetime')
    empty_value_display = '-пусто-'


admin.site.register(Payments, PaymentsAdmin)
admin.site.register(Animals, AnimalsAdmin)
admin.site.register(Transactions, TransactionsAdmin)
