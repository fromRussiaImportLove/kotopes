from django.db import models


class Payments(models.Model):
    user_id = models.IntegerField(verbose_name='ID client')
    shelter = models.CharField(max_length=255, verbose_name='Название приюта')
    datetime = models.DateTimeField(verbose_name='Дата-время платежа')
    item = models.CharField(max_length=255, verbose_name='Наименование услуги')
    amount = models.DecimalField(
        max_digits=10, decimal_places=2, verbose_name='Сумма платежа')

    def __str__(self):
        return f'{self.datetime}: {self.shelter} take {self.amount} roubles'


class Animals(models.Model):
    id = models.IntegerField(verbose_name='id', primary_key=True)
    name = models.CharField(max_length=128, verbose_name='Кличка')
    profile_link = models.URLField(verbose_name='Ссылка на профиль')
    shelter = models.CharField(max_length=255, verbose_name='Название приюта')
    city = models.CharField(max_length=64, verbose_name='Город')
    breed = models.CharField(max_length=128, verbose_name='Порода животного')
    kind = models.CharField(max_length=64, verbose_name='Вид животного')
    birthday = models.DateField(verbose_name='День рождения')
    gender = models.CharField(max_length=10, verbose_name='Пол')
    counter_favorite = models.IntegerField(verbose_name='В избранном')
    counter_home = models.IntegerField(verbose_name='Уже дома')
    counter_take = models.IntegerField(verbose_name='Забрать домой')
    counter_walking = models.IntegerField(verbose_name='Погулять')

    def __str__(self):
        return f'{self.kind} {self.name} in {self.shelter}'


class Transactions(models.Model):
    animal = models.ForeignKey(Animals, on_delete=models.CASCADE, related_name='payments')
    name = models.CharField(max_length=255, verbose_name='Название операции')
    amount = models.DecimalField(
        max_digits=10, decimal_places=2, verbose_name='Сумма операции')
    datetime = models.DateTimeField(verbose_name='Дата')
    order_id = models.IntegerField(verbose_name='Номер заказа')

    def __str__(self):
        return f'{self.datetime}: {self.name} on {self.amount} for {self.animal.name}'

