from django.urls import include, path
from rest_framework.routers import DefaultRouter

from api.views import (PaymentsViewSet, AnimalsViewSet,
                       TransactionsViewSet, import_payments_data)

router_v1 = DefaultRouter()
router_v1.register('payments', PaymentsViewSet,
                   basename='payments')
router_v1.register('animals', AnimalsViewSet,
                   basename='animals')
router_v1.register('transactions', TransactionsViewSet,
                   basename='transactions')

urlpatterns = [
    path('v1/', include(router_v1.urls)),
    path('v1/import_payments_data', import_payments_data)
]