# תיאור הפרויקט
```text
לבנות שרת שמפעיל מערכת פנימית לניהול מבצעים בזמן אמת, כאשר מזוהה איום נפתח incident -אירוע כך שהמפעילים יוכלו לפתוח אירוע וכן לעדכן סטטוס אירוע וכן לצפות באירועים פתוחים ולתעד פעולות שבוצעו, כל הנתונים ישמרו באמצעות MYSQL שהוא ירוץ באמצעות docker שיריץ container מהimage של mysql.
```

# router/נתיבים
```text
POST /operators
POST /incidents
PATCH /incidents/:id/status
GET /incidents/open
GET /logs
```

# מבנה הטבלאות
**Table: operators** 
```sql
id INT AUTO_INCREMENT PRIMARY KEY

name VARCHAR(100)

rank VARCHAR(100)
```

**Table: incidents**
```sql
id INT AUTO_INCREMENT PRIMARY KEY

code_name VARCHAR(100)

threat_level VARCHAR(50)

status VARCHAR(50)

operator_id INT FK(operators(id))

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

**Table: logs**
```sql
id INT AUTO_INCREMENT PRIMARY KEY

action VARCHAR(100)

incident_id INT FK(incidents(id))

operator_id INT FK(operators(id))

description TEXT

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

# Foreign Keys/מפתח זר
```text
● incidents.operator_id → operators.id
● logs.operator_id → operators.id
● logs.incident_id → incidents.id
```

# מבנה התיקיות והקבצים
```text
● ironDomeOps/
● │
● ├── controllers/
        controller.js
● ├── services/
        logic.js
● ├── repositories/
        repo.js
● ├── routes/
        routes.js
● ├── db/
    database.js
    database.sql
● ├── middleware/
        middleware.js
● ├── utils/
        utils.js
● ├── app.js
● ├── Dockerfile
● ├── docker-compose.yml
● ├──.dockerignore
● ├──.gitignore
● ├──package-lock.json
● ├──package.json
● ├──readme.md
● ├──.env
```
# משתני סביבה הכרחיים/.env
```text
PORT
DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
DB_NAME
```
# פקודות docker
```bash
docker compose up -d // להרצת הcontainer של הimage
docker compose down -v // להסרת הcontainer מהdocker ub
docker compose exec <service_name> <command> //להיכנס לתוך הcontainer ולהריץ משם פקודות
```
# התקנות
```bash
npm init -y
npm install express
npm install mysql2
npm install dotenv
npm install --save-dev nodemon
```

# הרצת הפרויקט-פקודה
```bash
npm run dev
```






