
### Step 1: Install Docker and Docker Compose

```bash
# Install Docker (assuming you're on a Linux system)
sudo apt-get update
sudo apt-get install docker.io

# Install Docker Compose
brew install docker-compose
```

### Step 2: Start Docker Daemon

```bash
sudo service docker start
```

### Step 3: Create a Django Project

```bash
django-admin startproject wigs_api
cd wigs_api
```

### Step 4: Create a Django App

```bash
python manage.py startapp mywigs
```

### Step 5: Define the Model

Edit `mywigs/models.py`:

```python
from django.db import models

class Wig(models.Model):
    name = models.CharField(max_length=255)
    color = models.CharField(max_length=255)
    length = models.CharField(max_length=255)
    curl_pattern = models.CharField(max_length=255)
    density = models.CharField(max_length=255)
    hair_origin = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
```

### Step 6: Configure Django Settings

Add your app to `INSTALLED_APPS` in `settings.py`:

```python
# settings.py
INSTALLED_APPS = [
    # ...
    'mywigs',
    # ...
]
```

### Step 7: Create API Serializers

Create a file `mywigs/serializers.py`:

```python
from rest_framework import serializers
from .models import Wig

class WigSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wig
        fields = '__all__'
```

### Step 8: Create API Views

Create a file `mywigs/views.py`:

```python
from rest_framework import viewsets
from .models import Wig
from .serializers import WigSerializer

class WigViewSet(viewsets.ModelViewSet):
    queryset = Wig.objects.all()
    serializer_class = WigSerializer
```

### Step 9: Configure API URLs

Create a file `mywigs/urls.py`:

```python
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WigViewSet

router = DefaultRouter()
router.register(r'wigs', WigViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
```

Include these URLs in your project's `urls.py`:

```python
# wigs_api/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('mywigs.urls')),
]
```

### Step 10: Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### Step 11: Install Django REST Framework

```bash
pip install djangorestframework
```

### Step 12: Create Docker Configuration

Create a `Dockerfile`:

```Dockerfile
# Dockerfile
FROM python:3.8.12

WORKDIR /app

COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
```

Create a `docker-compose.yml`:

```yaml
# docker-compose.yml
version: '3'

services:
  web:
    build: .
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - .:/app
    ports:
      - "8000:8000"
```

### Step 13: Build and Run Docker Container

```bash
docker-compose up --build
```

### Step 14: Verify Docker Daemon

```bash
docker info
```

