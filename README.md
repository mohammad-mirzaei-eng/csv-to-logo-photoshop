# Batch Logo Generator Script for Adobe Photoshop

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This script for Adobe Photoshop automates the process of generating logo variations based on data from a CSV file. It takes a Photoshop template (.psd file) and a CSV file containing names, families, and job titles, and generates individual logo files (both .png and .psd) for each entry in the CSV file. The script also ensures that the text in the Photoshop template fits within predefined bounding boxes.

## Features

* **Automated Logo Generation:** Creates multiple logo variations from a single template and a CSV data source.
* **CSV Data Input:** Reads data (Name, Family, Job Title) from a CSV file.
* **Text Fitting:** Automatically adjusts the font size of text layers to fit within specified dimensions.
* **PNG and PSD Output:** Saves each generated logo as both a high-quality PNG with transparency and a PSD file.
* **Error Handling:** Includes basic error handling for missing files and layers.
* **User-Friendly:** Provides clear prompts for selecting the output folder.

## Prerequisites

* **Adobe Photoshop:** This script is designed to run within Adobe Photoshop.
* **CSV Data File:** A CSV file containing the data for logo generation (at least three columns: Name, Family, Job Title).
* **Photoshop Template File (.psd):** A Photoshop file with at least two text layers named "Text1" (for Name and Family) and "Text2" (for Job Title).

## Setup

1.  **Save the script:** Save the provided JavaScript code as a `.jsx` file (e.g., `batch_logo_generator.jsx`).
2.  **Prepare your CSV file:** Ensure your CSV file (`data.csv` in the script's default path) is in the same directory as your Photoshop template or update the `csvFile` variable with the correct path. The CSV file should have at least three columns in the order: Name, Family, Job Title.
3.  **Prepare your Photoshop template:** Open your Photoshop template (`1.psd` in the script's default path) and make sure it has at least two text layers named exactly "Text1" and "Text2". Adjust the bounding boxes of these text layers according to your design needs.
4.  **Update file paths (optional):** If your CSV file and PSD template are not located at the default paths specified in the script (`D:/Uni/Logo/data.csv` and `D:/Uni/Logo/1.psd`), update the `csvFile` and `psdFile` variables at the beginning of the script with the correct paths.

## How to Use

1.  **Open Adobe Photoshop.**
2.  **Go to File > Scripts > Browse...** (or File > Scripts > Script Event Manager... and add it there to run automatically when a file is opened).
3.  **Select the `batch_logo_generator.jsx` file you saved.**
4.  **If the input files are not found, you will receive an alert.** Make sure the CSV file and PSD file are in the correct locations or that you have updated the file paths in the script.
5.  **You will be prompted to select an output folder** where the generated PNG and PSD files will be saved.
6.  **The script will then process each line in the CSV file:**
    * Open the Photoshop template.
    * Replace the content of the "Text1" layer with the Name and Family from the CSV.
    * Replace the content of the "Text2" layer with the Job Title from the CSV.
    * Adjust the font size of both text layers to fit within their specified bounding boxes (3.73 inches width, 0.85 inches height as currently defined).
    * Save the generated logo as a PNG file (e.g., `Name Family.png`) with transparency in the selected output folder.
    * Save the generated logo as a PSD file (e.g., `Name Family.psd`) in the selected output folder.
    * Close the current Photoshop document without saving changes to the original template.
7.  **Once the script finishes processing all the lines in the CSV file, you will receive a completion alert.**

---

# اسکریپت تولید دسته‌ای لوگو برای ادوبی فتوشاپ

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

این اسکریپت برای ادوبی فتوشاپ، فرآیند تولید تغییرات لوگو را بر اساس داده‌های یک فایل CSV به صورت خودکار انجام می‌دهد. این اسکریپت یک فایل قالب فتوشاپ (.psd) و یک فایل CSV حاوی نام‌ها، نام‌های خانوادگی و عناوین شغلی را دریافت کرده و فایل‌های لوگوی جداگانه (هم .png و هم .psd) را برای هر ورودی در فایل CSV تولید می‌کند. همچنین، این اسکریپت اطمینان حاصل می‌کند که متن موجود در قالب فتوشاپ در داخل کادرهای مشخص شده قرار می‌گیرد.

## ویژگی‌ها

* **تولید خودکار لوگو:** ایجاد چندین تغییر لوگو از یک قالب واحد و یک منبع داده CSV.
* **ورودی داده از CSV:** خواندن داده‌ها (نام، نام خانوادگی، عنوان شغلی) از یک فایل CSV.
* **تطبیق متن:** تنظیم خودکار اندازه فونت لایه‌های متنی برای قرارگیری در ابعاد مشخص شده.
* **خروجی PNG و PSD:** ذخیره هر لوگوی تولید شده به عنوان یک فایل PNG با کیفیت بالا و با قابلیت شفافیت و همچنین یک فایل PSD.
* **مدیریت خطا:** شامل مدیریت خطای اولیه برای فایل‌ها و لایه‌های گمشده.
* **کاربری آسان:** ارائه دستورالعمل‌های واضح برای انتخاب پوشه خروجی.

## پیش‌نیازها

* **Adobe Photoshop:** این اسکریپت برای اجرا در ادوبی فتوشاپ طراحی شده است.
* **فایل داده CSV:** یک فایل CSV حاوی داده‌های مورد نیاز برای تولید لوگو (حداقل سه ستون: نام، نام خانوادگی، عنوان شغلی).
* **فایل قالب فتوشاپ (.psd):** یک فایل فتوشاپ با حداقل دو لایه متنی به نام‌های دقیق "Text1" (برای نام و نام خانوادگی) و "Text2" (برای عنوان شغلی).

## راه‌اندازی

1.  **ذخیره اسکریپت:** کد جاوااسکریپت ارائه شده را به عنوان یک فایل با پسوند `.jsx` ذخیره کنید (به عنوان مثال، `batch_logo_generator.jsx`).
2.  **آماده‌سازی فایل CSV:** اطمینان حاصل کنید که فایل CSV شما (`data.csv` در مسیر پیش‌فرض اسکریپت) در همان دایرکتوری فایل قالب فتوشاپ شما قرار دارد یا متغیر `csvFile` را با مسیر صحیح به‌روزرسانی کنید. فایل CSV باید حداقل سه ستون به ترتیب: نام، نام خانوادگی، عنوان شغلی داشته باشد.
3.  **آماده‌سازی فایل قالب فتوشاپ:** فایل قالب فتوشاپ خود (`1.psd` در مسیر پیش‌فرض اسکریپت) را باز کنید و مطمئن شوید که حداقل دو لایه متنی با نام‌های دقیق "Text1" و "Text2" دارد. کادرهای محدود کننده این لایه‌های متنی را مطابق با نیازهای طراحی خود تنظیم کنید.
4.  **به‌روزرسانی مسیرهای فایل (اختیاری):** اگر فایل CSV و قالب PSD شما در مسیرهای پیش‌فرض مشخص شده در اسکریپت (`D:/Uni/Logo/data.csv` و `D:/Uni/Logo/1.psd`) قرار ندارند، متغیرهای `csvFile` و `psdFile` را در ابتدای اسکریپت با مسیرهای صحیح به‌روزرسانی کنید.

## نحوه استفاده

1.  **ادوبی فتوشاپ را باز کنید.**
2.  **به File > Scripts > Browse...‎ بروید** (یا File > Scripts > Script Event Manager...‎ و آن را برای اجرای خودکار هنگام باز شدن یک فایل اضافه کنید).
3.  **فایل `batch_logo_generator.jsx` را که ذخیره کرده‌اید انتخاب کنید.**
4.  **اگر فایل‌های ورودی پیدا نشوند، یک هشدار دریافت خواهید کرد.** مطمئن شوید که فایل CSV و فایل PSD در مکان‌های صحیح قرار دارند یا مسیرهای فایل را در اسکریپت به‌روزرسانی کرده‌اید.
5.  **از شما خواسته می‌شود یک پوشه خروجی را انتخاب کنید** که فایل‌های PNG و PSD تولید شده در آن ذخیره شوند.
6.  **سپس اسکریپت هر خط در فایل CSV را پردازش می‌کند:**
    * قالب فتوشاپ را باز می‌کند.
    * محتوای لایه "Text1" را با نام و نام خانوادگی از CSV جایگزین می‌کند.
    * محتوای لایه "Text2" را با عنوان شغلی از CSV جایگزین می‌کند.
    * اندازه فونت هر دو لایه متنی را تنظیم می‌کند تا در کادرهای محدود کننده مشخص شده خود قرار بگیرند (در حال حاضر 3.73 اینچ عرض، 0.85 اینچ ارتفاع).
    * لوگوی تولید شده را به عنوان یک فایل PNG (به عنوان مثال، `Name Family.png`) با قابلیت شفافیت در پوشه خروجی انتخاب شده ذخیره می‌کند.
    * لوگوی تولید شده را به عنوان یک فایل PSD (به عنوان مثال، `Name Family.psd`) در پوشه خروجی انتخاب شده ذخیره می‌کند.
    * سند فعلی فتوشاپ را بدون ذخیره تغییرات در قالب اصلی می‌بندد.
7.  **پس از اینکه اسکریپت تمام خطوط موجود در فایل CSV را پردازش کرد، یک هشدار تکمیل دریافت خواهید کرد.**

---