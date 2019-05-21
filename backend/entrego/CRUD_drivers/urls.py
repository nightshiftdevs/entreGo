from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from CRUD_drivers import views

app_name = 'CRUD_drivers'
urlpatterns = [
    path('drivers/', views.DriversList.as_view(), name='drivers_list'),
    path('drivers/<int:pk>/', views.DriversDetails.as_view(), name='drivers_detail'),
    ]

