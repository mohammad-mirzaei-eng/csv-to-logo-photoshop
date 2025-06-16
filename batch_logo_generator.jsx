// مسیر فایل‌ها (فولدرها را به مسیر دلخواه خودت تغییر بده)
// اطمینان حاصل کنید که این مسیرها دقیقاً صحیح هستند و به فایل‌های شما اشاره می‌کنند.
var csvFile = new File("D:/Uni/Logo/data.csv");
var psdFile = new File("D:/Uni/Logo/1.psd");

/**
 * تابعی برای تنظیم اندازه متن لایه به گونه‌ای که در یک کادر مشخص جای بگیرد.
 * @param {ArtLayer} layer - لایه متنی که باید اندازه آن تنظیم شود.
 * @param {number} maxWidthInch - حداکثر عرض مجاز برای متن بر حسب اینچ.
 * @param {number} maxHeightInch - حداکثر ارتفاع مجاز برای متن بر حسب اینچ.
 */
function fitTextToBox(layer, maxWidthInch, maxHeightInch) {
    // بررسی کنید که آیا لایه یک لایه متنی است.
    if (layer.kind !== LayerKind.TEXT) {
        // اگر لایه متنی نیست، کاری انجام ندهید و از تابع خارج شوید.
        return;
    }

    var doc = app.activeDocument;
    // تبدیل ابعاد اینچ به پیکسل بر اساس رزولوشن سند.
    var maxWidth = maxWidthInch * doc.resolution;
    var maxHeight = maxHeightInch * doc.resolution;

    // حلقه‌ای بی‌نهایت برای کاهش تدریجی اندازه فونت
    while (true) {
        // دریافت ابعاد فعلی کادر متن
        var bounds = layer.bounds;
        var w = bounds[2].as("px") - bounds[0].as("px"); // عرض
        var h = bounds[3].as("px") - bounds[1].as("px"); // ارتفاع

        // اگر عرض و ارتفاع متن درون ابعاد مجاز قرار گرفت، از حلقه خارج شوید.
        if (w <= maxWidth && h <= maxHeight) {
            break;
        }

        // اگر اندازه فونت به حداقل مجاز (5 pt) رسید، برای جلوگیری از بی‌نهایت شدن حلقه و فونت بسیار کوچک، خارج شوید.
        if (layer.textItem.size <= 5) {
            break;
        }

        // اندازه فونت را 1 pt کاهش دهید.
        // این خط کلید رفع مشکل بود، باید مقدار جدید را به textItem.size اختصاص دهید.
        layer.textItem.size = layer.textItem.size - 1;
    }
}

// بررسی وجود فایل‌های ورودی
if (!csvFile.exists || !psdFile.exists) {
    alert("فایل CSV (" + csvFile.fsName + ") یا PSD (" + psdFile.fsName + ") پیدا نشد!");
} else {
    // انتخاب پوشه خروجی توسط کاربر
    var destFolder = Folder.selectDialog("پوشه‌ای را برای ذخیره فایل‌های خروجی انتخاب کنید");

    if (!destFolder) {
        alert("پوشه‌ای انتخاب نشد. عملیات لغو شد.");
    } else {
        // خواندن محتویات فایل CSV
        csvFile.open("r");
        var lines = [];
        // خواندن خط به خط CSV تا پایان فایل
        while (!csvFile.eof) {
            var line = csvFile.readln();
            // اضافه کردن خطوطی که خالی نیستند (با حذف فضای خالی ابتدا و انتها)
            if (("" + line).replace(/^\s+|\s+$/g, "") !== "") {
                lines.push(line);
            }
        }
        csvFile.close();

        // پردازش هر ردیف از داده‌های CSV
        for (var i = 0; i < lines.length; i++) {
            // تقسیم خط بر اساس کاما برای جداسازی ستون‌ها
            var columns = lines[i].split(",");

            // استخراج داده‌ها از ستون‌ها با بررسی وجود و حذف فضای خالی
            // اگر ستون وجود نداشت یا خالی بود، مقدار پیش‌فرض را تنظیم کنید.
            var Name = (columns.length > 0 && columns[0]) ? ("" + columns[0]).replace(/^\s+|\s+$/g, "") : "NoName";
            var Family = (columns.length > 1 && columns[1]) ? ("" + columns[1]).replace(/^\s+|\s+$/g, "") : "NoFamily";
            var jobTitle = (columns.length > 2 && columns[2]) ? ("" + columns[2]).replace(/^\s+|\s+$/g, "") : "NoJobTitle";

            // باز کردن فایل PSD قالب
            var doc = app.open(psdFile);

            try {
                // دریافت لایه‌های متنی با نام‌های مشخص
                var text1 = doc.artLayers.getByName("Text1");
                var text2 = doc.artLayers.getByName("Text2");

                // جایگذاری محتوای متن
                text1.textItem.contents = Name + " " + Family;
                text2.textItem.contents = jobTitle;

                // فراخوانی تابع برای تنظیم اندازه متن متناسب با کادر
                // ابعاد کادر را بر حسب اینچ تنظیم کنید (مطابق با نیاز طراحی شما)
                fitTextToBox(text1, 3.73, 0.85); // 3.73 اینچ عرض و 0.85 اینچ ارتفاع برای Text1
                fitTextToBox(text2, 3.73, 0.85); // 3.73 اینچ عرض و 0.85 اینچ ارتفاع برای Text2

            } catch (e) {
                // در صورت عدم یافتن لایه‌ها، خطا را گزارش دهید و سند را بدون ذخیره ببندید.
                alert("خطا: لایه 'Text1' یا 'Text2' در ردیف " + (i + 1) + " (نام: " + Name + ") یافت نشد یا مشکلی در تغییر متن پیش آمد.\n" + e.message);
                doc.close(SaveOptions.DONOTSAVECHANGES);
                continue; // به ردیف بعدی CSV بروید.
            }

            // --- ذخیره خروجی PNG ---
            var exportFileNamePNG = Name + " " + Family + ".png";
            var exportFilePNG = new File(destFolder + "/" + exportFileNamePNG);

            var pngOptions = new ExportOptionsSaveForWeb();
            pngOptions.format = SaveDocumentType.PNG; // فرمت PNG
            pngOptions.PNG8 = false; // PNG-24 برای کیفیت بالاتر
            pngOptions.transparency = true; // حفظ شفافیت
            pngOptions.interlaced = false; // عدم تداخل
            pngOptions.quality = 100; // کیفیت 100%

            // ذخیره سند به عنوان PNG (با استفاده از save for web برای کنترل بیشتر)
            // توجه: در برخی نسخه‌های فتوشاپ، save for web ممکن است نیاز به فعال‌سازی داشته باشد یا عملکرد متفاوتی داشته باشد.
            // اگر با این خط مشکل داشتید، می‌توانید از SaveAs با PngSaveOptions استفاده کنید.
            doc.exportDocument(exportFilePNG, ExportType.SAVEFORWEB, pngOptions);

            // --- ذخیره خروجی PSD ---
            var saveFileNamePSD = Name + " " + Family + ".psd";
            var saveFilePSD = new File(destFolder + "/" + saveFileNamePSD);

            var psdOptions = new PhotoshopSaveOptions();
            // اگر می‌خواهید حداکثر سازگاری را حفظ کنید: 
			psdOptions.embedColorProfile = true;
			psdOptions.alphaChannels = true;
            // doc.saveAs با 'asCopy' به شما امکان می‌دهد کپی را ذخیره کرده و سند اصلی را باز نگه دارید (با تغییرات)
            // اما چون در انتها doc.close(SaveOptions.DONOTSAVECHANGES) را داریم، مستقیماً saveAs کافیست.
            doc.saveAs(saveFilePSD, psdOptions, true); // true برای ذخیره به عنوان کپی

            // بستن سند فعلی بدون ذخیره تغییرات روی فایل اصلی (قالب)
            doc.close(SaveOptions.DONOTSAVECHANGES);
        }

        alert("عملیات با موفقیت به پایان رسید. خروجی‌های PNG و PSD در پوشه " + destFolder.fsName + " ایجاد شدند.");
    }
}
