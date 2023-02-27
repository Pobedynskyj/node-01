# Отримуємо данні і виводимо в таблицю 
* node index.js --action list
 > https://monosnap.com/list/63fcd6515b50b191c96982e7
 
# Отримуємо контакт по ID 
* node index.js --action get --id=1
 > https://monosnap.com/list/63fcd6751c772b6a87945580

# Видаляємо контакт по ID
* node index.js --action remove --id=1
 > https://monosnap.com/list/63fcd6899c814a1d05d4bc4e
 
# Додаємо контакт(імʼя, пошта, телефон)
* node index.js --action add --name Name --email example@gmail.com --phone 322-22-22
 > https://monosnap.com/list/63fcd6a95b50b191c96982f2
