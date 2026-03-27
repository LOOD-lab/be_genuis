# Be Genius - Institut des Genies d'Art Oratoire

Site web officiel de Be Genius — React (frontend) + FastAPI (backend).

---

## Structure du projet

```
be_genuis/
├── frontend/        ← React + Vite + Tailwind CSS
└── backend/         ← FastAPI + SQLite
    └── venv/        ← Environnement Python (NE PAS modifier)
```

## Lancer le projet en developpement

### Important — toujours utiliser le bon venv

Le projet utilise un environnement Python situe dans `backend/venv/`.  
Ne jamais utiliser `.venv` a la racine — ce n'est pas le bon.

---

### Terminal 1 — Backend FastAPI

```bash
cd ~/projets/be_genuis

# Activer le bon venv
source backend/venv/bin/activate

# Se placer dans le dossier backend
cd backend

# Lancer le serveur
uvicorn app.main:app --reload --port 8000
```

Le backend tourne sur : http://localhost:8000  
Documentation API interactive : http://localhost:8000/docs

---

### Terminal 2 — Frontend React

```bash
cd ~/projets/be_genuis/frontend

# Lancer le serveur de developpement
npm run dev
```

Le site tourne sur : http://localhost:5173  
Dashboard admin : http://localhost:5173/admin

---

## Creer le compte administrateur

Le backend doit tourner avant de creer le compte.

```bash
curl -X POST http://localhost:8000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@begenius.cg", "password": "Admin2026"}'
```

---

## Si le DNS tombe (probleme WSL2)

Symptome : `Could not resolve host` ou `Temporary failure in name resolution`

```bash
sudo bash -c 'echo "nameserver 8.8.8.8
nameserver 8.8.4.4
nameserver 1.1.1.1" > /etc/resolv.conf'
```

Pour que ce soit permanent (a faire une seule fois) :

```bash
sudo bash -c 'cat > /etc/wsl.conf << EOF
[network]
generateResolvConf = false
EOF'
```

Puis redemarrer WSL depuis PowerShell Windows :

```powershell
wsl --shutdown
```

---

## Pousser le code sur GitHub

```bash
cd ~/projets/be_genuis
git add .
git commit -m "votre message"
git push origin main
```

Identifiants GitHub :
- Username : `laije1`
- Password : ton Personal Access Token (https://github.com/settings/tokens)

---

## Variables d'environnement backend

Fichier `backend/.env` :

```
DATABASE_URL=sqlite:///./begenius.db
SECRET_KEY=begenius-super-secret-key-2026
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60
```

---

## Build production

### Frontend
```bash
cd frontend
npm run build
# Les fichiers sont dans frontend/dist/
```

### Backend
```bash
source backend/venv/bin/activate
cd backend
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

---

## Technologies

| Couche | Technologie |
|--------|-------------|
| Frontend | React 18 + Vite + Tailwind CSS 3 |
| Backend | FastAPI + SQLAlchemy + SQLite |
| Auth | JWT (python-jose + bcrypt) |
| Upload | FastAPI StaticFiles |
