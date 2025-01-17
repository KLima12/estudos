from django.contrib import admin
from django.urls import path
from ninja import NinjaAPI
from produtos.views import api
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', api.urls),
]
