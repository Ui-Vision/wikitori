import React from "react";
import heroBg from "@/assets/hero-bg.png";
import Image from "next/image";

const FiveFoundations = () => {
  return (
    <div className=" min-h-screen w-full ">
      <Image
        src={heroBg}
        width={1000}
        height={1000}
        alt="herobg"
        className="w-full object-cover h-[325px] lg:h-[350px] xl:h-[370px] z-0 absolute  top-0"
      />
      <div className="flex flex-col z-30 ">
        <div className=" absolute top-[180px] text-center mx-auto w-full flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-white">
            ویکی‌پدیا : پنج بنیاد
          </h1>
        </div>
        <div className="mt-[295px] lg:mt-[350px] xl:mt-[320px] px-5 md:px-10 ">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 ">
              <p className="text-[#161619b0] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] leading-6 lg:leading-8 xl:leading-9 tracking-wide">
                ویکی‌پدیا یک دانشنامه است که ویژگی‌های دانشنامه‌های عمومی و
                تخصصی و فرهنگ‌های جغرافیایی را در خود ترکیب کرده‌است. ویکی‌پدیا
                نه یک فرهنگ واژگان، نه سکوی سخنرانی، نه روزنامه، نه یک فضای
                وبلاگ‌نویسی، نه ارائه‌کنندهٔ فضای برخط رایگان، نه محل
                یادگاری‌نویسی، نه تمرین آنارشیسم و دموکراسی و نه یک لینک‌دانی
                است. تجربه‌ها و دیدگاه‌های شخصی نیز جایی در ویکی‌پدیا
                ندارند. سیاست منع تحقیق دست‌اول باید مورد نظر همهٔ ویرایشگران
                باشد. مقاله‌ها نباید شامل نظریه‌ها، داده‌ها، عبارت‌ها، مفاهیم،
                استدلال‌ها یا عقایدی باشند که تا به حال در هیچ‌جا منتشر
                نشده‌اند. تمام توجه ویراستاران باید بر دقت، صحت و درستی مقالات
                متمرکز باشد.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-neutral-900 text-xl md:text-2xl  font-bold leading-8 tracking-wide">
                ویکی‌پدیا دیدگاهی بی‌طرف دارد؛
              </h1>
              <p className="text-[#161619b0] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] leading-6 lg:leading-8 xl:leading-9 tracking-wide">
                یعنی ما در ویکی‌پدیا کوشش بر آن داریم تا مقالات تنها یک دیدگاه
                خاص را تبلیغ نکنند، بلکه به تمام دیدگاه‌ها درمورد هر موضوع
                بپردازند. گاهی این کار مستلزم بیان‌کردن چندین دیدگاه مختلف و
                گسترش هریک به حد کافی است؛ تا کاربر بداند هر دیدگاه از کدام منبع
                می‌آید، و هیچ دیدگاهی نباید به عنوان «حقیقت محض» یا «بهترین
                دیدگاه» معرفی شود. برای رسیدن به چنین هدفی، آوردن منابع معتبر و
                قابل استناد در هر جای ممکن و به‌خصوص در موضوع‌های مورد اختلاف،
                ضروری است. وقتی در مورد اینکه کدام نسخه بی‌طرف‌تر است،
                اختلاف‌نظری پیش آید، یک دوره دست کشیدن از ویرایش‌های
                اختلاف‌برانگیز اعلام می‌شود، مقاله برچسبدرستی یا بی‌طرفی
                می‌خورَد و جزئیات اختلاف‌برانگیز در صفحهٔ بحث به گفتگو گذاشته
                می‌شوند و به اختلاف‌ها رسیدگی می‌شود.
              </p>
            </div>
            <p className="text-[#161619b0] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] leading-6 lg:leading-8 xl:leading-9 tracking-wide">
              ویکی‌پدیا یک محتوای آزاد است که هر کسی می‌تواند آن را تغییر دهد،
              ویرایش کند، استفاده کند و توزیع کند. به قانون حق نشر احترام
              بگذارید و از منابع دزدی ادبی نکنید. محتوای ناآزاد را می‌توان
              تحت استفادهٔ منصفانه به کار برد، اما همهٔ تلاشتان را در استفاده از
              جایگزین‌های آزاد برای محتوایی که می‌خواهید به ویکی‌پدیا بیفزایید
              بکنید. از آنجا که همهٔ مشارکت‌های شما با پروانهٔ آزاد در اختیار
              عموم قرار می‌گیرد، هیچ ویرایشگری مالک هیچ مقاله‌ای نخواهد بود، و
              همهٔ ویرایش‌های شما ممکن است بدون هیچ چشم‌پوشی ویرایش و بازتوزیع
              شود، و چنین هم خواهد شد.
            </p>
            <p className="text-[#161619b0] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] leading-6 lg:leading-8 xl:leading-9 tracking-wide">
              ویراستاران باید با یکدیگر با احترام و تمدن رفتار کنند؛ به دیگر
              ویکی‌پدیانویسان احترام بگذارید، حتی اگر با آن‌ها موافق
              نیستید. نزاکت را حفظ کنید. از حمله‌های شخصی و تعمیم‌دادن‌های کلی
              بپرهیزید. وقتی بحث بالا می‌گیرد، آرام بمانید. با پیروی از قانون
              سه‌برگردان از درگیرشدن در جنگ‌های ویرایشی بیهوده خودداری کنید و به
              یاد داشته باشید ۱٬۰۰۴٬۰۷۳ مقاله در ویکی‌پدیای فارسی هست که
              می‌توانید به جای نزاع، به ویرایش، تکمیل و بحث دربارهٔ آن‌ها
              بپردازید. با حسن نیت عمل کنید و برای اثبات یک موضوع، مقاله‌ها را
              تکه‌پاره نکنید و تا وقتی که شاهدی برای عملکردی غیر از این
              ندیده‌اید، فرض را بر این بگذارید که دیگران هم چنین می‌کنند.
              از حساب‌های زاپاس سوءاستفاده نکنید. آزاداندیش، پذیرا و کل‌نگر
              باشید.
            </p>

            <div className="flex flex-col gap-4">
              <p className="text-[#161619b0] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] leading-6 lg:leading-8 xl:leading-9 tracking-wide">
                مقررات ویکی‌پدیا تغییرناپذیر نیستند، مقررات ویکی‌پدیا روی سنگ
                کنده نشده‌اند، روح قوانین بر حروف و واژه‌های آن‌ها برتری دارد.
                در ویرایش، انتقال و تغییر مقالات بی‌باک باشید؛ زیرا این شوقِ
                ویراستن و پیراستن است که باید به عنوان هدف شناخته شود. کامل بودن
                لازم نیست. از این نترسید که ممکن است خرابکاری شود. نسخه‌های قبلی
                مقالات محفوظ هستند؛ پس امکان ندارد که تصادفاً ویکی‌پدیا را خراب
                کنید یا محتوای مقالات را به صورت بازگشت‌ناپذیری نابود کنید. اما
                به یاد داشته باشید که هرچه بنویسید، شاید برای آیندگان بماند.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveFoundations;