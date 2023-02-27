# Отримуємо данні і виводимо в таблицю 
* node index.js --action list
 > https://monosnap.com/file/i4aYJ05xSE03IRgCPc1OerfNEVmi2W
 
# Отримуємо контакт по ID 
* node index.js --action get --id=1
 > https://monosnap.com/file/81LDgKQRpnBq45PIuDSuBOADlSgCz7

# Видаляємо контакт по ID
* node index.js --action remove --id=1
 > https://monosnap.com/file/wTBkS7EHrNRBbpz6QELadT1dbXW7nL
 
# Додаємо контакт(імʼя, пошта, телефон)
* node index.js --action add --name Name --email example@gmail.com --phone 322-22-22
 > https://monosnap.com/file/SQmP3BdpYuPYdzsKVOMZzUH0X0z8xd
