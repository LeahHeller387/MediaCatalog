
# הוראות הרצה מקומית

1. ## דרישות מינימליות להרצה:

- Node.js 18+ (נבדק עם v20.19.4)
- npm 8+
- Angular CLI 19.2.15


2. ## הורדת הפרוייקט:
   ```bash
   git clone https://github.com/LeahHeller387/MediaCatalog
   cd angular-catalog-app
   ```

3. ## התקנת תלויות:
   ```bash
   npm install
   ```
4. ##  קובץ סביבה – environment.ts

המערכת משתמשת בקובץ הסביבה `src/environments/environment.ts` שמוגדר כך:

```ts
export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8888/' 
};

```
5. ## הרצת הפרוייקט הפרויקט:
   ```bash
   ng serve
   ```

6. ## האפליקציה רצה בכתובת:
   ```
   http://localhost:4200
   ```

---

