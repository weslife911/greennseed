from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from users.models import User

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token["full_name"] = user.full_name
        token["username"] = user.username
        token["phone_number"] = str(user.phone_number)
        token["email"] = user.email
        token["referrer"] = user.referrer

        return token
    
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password], style={"input_type": "password"}, max_length=8)
    password2 = serializers.CharField(write_only=True, required=True, style={"input_type": "password"}, max_length=8)
    phone_number = serializers.DecimalField(
        max_digits=9,
        decimal_places=0,
        required=True,
        style={"input_type": "number"}  # This makes the input show as a number field
    )
    referrer = serializers.CharField(required=False, allow_null=True, allow_blank=True)
    full_name = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = ["full_name", "username", "phone_number", "email", "referrer", "password", "password2"]

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data["username"],
            full_name=validated_data["full_name"],
            email=validated_data["email"],
            phone_number=validated_data.get("phone_number"),
            referrer=validated_data["referrer"]
        )
        user.set_password(validated_data["password"])
        user.save()
        return user
    
    def validate(self, attrs):
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError({"password": "Password fields do not match"})
        return attrs