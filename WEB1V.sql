CREATE OR REPLACE VIEW WEB1V AS
SELECT PRODUCT_ID,STYLE_ID,CATEGORY,DESCRIPTION,SERIAL_NUMBER,PRICE,COLOR 
FROM RP_PRODUCTS;

CREATE OR REPLACE VIEW WEB2V AS
SELECT order_id,customer_id,full_name,order_date,sub_total,tax_rate,grand_total,quantity
FROM RP_INVOICES
JOIN RP_INVOICE_PRODUCTS
USING(ORDER_ID)
JOIN RP_CUSTOMERS
USING(CUSTOMER_ID);

CREATE OR REPLACE VIEW WEB3V AS
SELECT FULL_NAME,ORDER_ID,sub_total,tax_rate,grand_total
FROM RP_CUSTOMERS
JOIN RP_INVOICES
USING(CUSTOMER_ID);

CREATE OR REPLACE VIEW WEB4V AS
SELECT PRODUCT_ID,DESCRIPTION,PRODUCT_COUNT FROM RP_PRODUCTS
JOIN RP_WAREHOUSE_PRODUCTS
USING(PRODUCT_ID);