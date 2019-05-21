from django.db import models

class Drivers(models.Model):
    firstName = models.CharField("FirstName",max_length=80)
    lastName = models.CharField("LastName",max_length=80) 
    email = models.EmailField("Email")
    cellphone = models.CharField("Cellphone",max_length=200)
    birthDate = models.DateField("BirthDate")
    address = models.CharField("address",max_length=200)
    password = models.CharField("password",max_length=10)
    password2 = models.CharField("password2",max_length=10)
    bankAccount = models.CharField("bankAccount",max_length=80)
    #userPhoto = models.ImageField(upload_to='userPhoto', blank=True)
    licensePlate = models.CharField("LicensePlate",max_length=80)
    cargoVolume = models.CharField("CargoVolume", max_length=80)
    brand = models.CharField("Brand", max_length=80)
    color = models.CharField("Color", max_length=80)
    #vehiclePhoto = models.ImageField(upload_to='vehiclePhoto', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    state = models.BooleanField(default=False)
    

# Create your models here.
