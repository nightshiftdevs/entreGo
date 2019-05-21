from rest_framework import serializers
from CRUD_drivers.models import Drivers


class DriversSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drivers
        fields = ('id', 'firstName', 'lastName', 'email', 'cellphone',
                  'birthDate', 'address', 'password', 'password2', 'bankAccount',
                  'licensePlate', 'cargoVolume', 'brand', 'color', 'created_at',
                  'updated', 'state')
