# Backend Be Genius - Installation

## 1. Copier les fichiers
Copier tout le contenu dans backend/

## 2. Activer le venv et installer
cd ~/projets/be_genuis
source backend/venv/bin/activate
pip install -r backend/requirements.txt

## 3. Lancer le serveur
cd backend
uvicorn app.main:app --reload --port 8000

## 4. Tester
Ouvrir http://localhost:8000/docs
