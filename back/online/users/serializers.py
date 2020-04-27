from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework import authentication
from rest_framework import exceptions


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username','email', 'password')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

        def create(self, validated_data):
        	user = User.objects.create_user(**validated_data)
        	return user

        def authenticate(self, request):
            username = request.META.get('username')
            if not username:
                return None

            try:
                user = User.objects.get(username=username)
            except User.DoesNotExist:
                raise exceptions.AuthenticationFailed('no such user')

            return (user, None)