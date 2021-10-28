# Generated by Django 3.2.8 on 2021-10-28 11:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jengabay', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='buyer',
            new_name='customer',
        ),
        migrations.AlterField(
            model_name='buyer',
            name='phone_number',
            field=models.CharField(max_length=15),
        ),
        migrations.AlterField(
            model_name='seller',
            name='phone_number',
            field=models.CharField(max_length=15),
        ),
    ]
