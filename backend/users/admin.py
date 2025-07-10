from django.contrib import admin
from .models import User

# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display = ["email", "username", "full_name", "phone_number", "referrer"]

admin.site.register(User, UserAdmin)