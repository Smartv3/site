import { useRef, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding-right: 8vw;
  padding-left: 8vw;
  display: flex;
  direction: rtl;
  align-items: center;
  background-color: #352344;
  color: #fff;
  @media (max-width: 768px) {
    padding-right: 24px;
    padding-left: 24px;
  }
  h1{
    color: #bc3b81;
  }
  h3 {
    color: #bc668c;
    font-size: 24px;
    line-height: 30px;
    margin-top: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  a {
    color: #bc668c;
  }
  ol {
    margin-top: 0px;
    margin-bottom: 10px;
    padding-left: 12px;
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  p {
    margin-bottom: 10px;
  }
`;

const Container = styled.div`
  display: grid;
  width: 100%;
  align-items: start;
  grid-auto-columns: 1fr;
  grid-column-gap: 2vw;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto 80px;
`;

const MainHeader = styled.div`
  grid-column-end: 5;
  grid-column-start: 2;
  grid-row-end: 4;
  grid-row-start: 1;
  align-self: start;
  padding-top: 33vh;
  padding-bottom: 30px;
`;

const LabelOne = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LabelTwo = styled.h1`
  overflow: hidden;
  color: #bc3b81;
  overflow: hidden;
  margin-top: 0px;
  margin-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;
  font-size: 3.4vw;
  font-weight: 500;
`;

const PrivacyContainer = styled.div`
  grid-column-end: 7;
  grid-column-start: 2;
  grid-row-end: 5;
  grid-row-start: 4;
  align-self: start;
  color: #fff;
  font-size: 0.8vw;
  line-height: 160%;
  letter-spacing: 0.3px;
`;

const Privacy = () => {
  const [menuState, setMenuState] = useState(false);
  const containerRef = useRef(null);
  return (
    <>
      <Header setMenuState={setMenuState}/>
      {menuState && <Menu setMenuState={setMenuState} />}
      <main data-scroll-container ref={containerRef}>
        <Section>
          <Container>
            <MainHeader>
              <LabelOne>آخر تحديث: ١ يناير ٢٠٢٠</LabelOne>
              <LabelTwo>سياسة الخصوصية</LabelTwo>
            </MainHeader>
            <PrivacyContainer>
              <div class="p-wrap p-privacy en">
                <ol>
                  <li>
                    <h3>تعليقات</h3>
                    <p>
                      عندما يترك الزائرون تعليقاتهم على الموقع، نجمع البيانات
                      الموضحة في نموذج التعليقات، وكذلك عنوان IP الخاص بالزائر
                      وسلسلة وكلاء متصفح المستخدم للمساعدة في اكتشاف الرسائل غير
                      المرغوب فيها.
                    </p>
                    <p>
                      قد يتم توفير سلسلة مجهولة المصدر تم إنشاؤها من عنوان بريدك
                      الإلكتروني (وتسمى أيضًا hash) إلى خدمة Gravatar لمعرفة ما
                      إذا كنت تستخدمها. سياسة خصوصية خدمة Gravatar متوفرة هنا:
                      https://automattic.com/privacy/. بعد الموافقة على تعليقك،
                      ستكون صورة ملفك الشخصي مرئية للعامة في سياق تعليقك.
                    </p>
                  </li>
                  <li>
                    <h3>وسائط</h3>
                    <p>
                      إذا قمت بتحميل الصور إلى موقع الويب، يجب تجنب تحميل الصور
                      مع بيانات الموقع المضمنة (EXIF GPS). يمكن لزوّار الموقع
                      تنزيل واستخراج أي بيانات موقع من الصور على موقع الويب.
                    </p>
                  </li>
                </ol>
                <ol>
                  <h3>نماذج الاتصال</h3>
                  <li>
                    <h3>ملفات تعريف الارتباط</h3>
                    <p>
                      إذا تركت تعليقًا على موقعنا، فيمكنك تمكين حفظ اسمك وعنوان
                      بريدك الإلكتروني وموقعك الإلكتروني في ملفات تعريف
                      الارتباط. هذه هي لراحتك حتى لا تضطر إلى ملء التفاصيل
                      الخاصة بك مرة أخرى عند ترك تعليق آخر. ستستمر ملفات تعريف
                      الارتباط هذه لمدة عام واحد.
                    </p>
                    <p>
                      إذا قمت بزيارة صفحة تسجيل الدخول الخاصة بنا، فسنهيئ ملف
                      تعريف ارتباط مؤقت لتحديد ما إذا كان مستعرضك يقبل هذه
                      الملفات. لايحوي ملف تعريف الارتباط هذا أي بيانات شخصية كما
                      يتم التخلص منه عندما تقوم بإغلاق متصفحك.
                    </p>
                    <p>
                      عندما تسجّل الدخول نقوم أيضاً بتهيئة ملفات عديدة لتعريف
                      الارتباط من أجل حفظ معلومات دخولك وخيارات شاشة العرض
                      الخاصة بك. ملفات تعريف الارتباط لمعلومات الدخول تبقى
                      ليومين، بينما تبقى ملفات تعريف ارتباط خيارات شاشة العرض
                      لمدة سنة. سيستمر تسجيل دخولك طيلة أسبوعين عندما تختار
                      “تذكرني”، وإذا قمت بتسجيل خروجك من الحساب، سيتم حذف ملفات
                      تعريف ارتباط تسجيل الدخول.
                    </p>
                    <p>
                      سيُحفظ ملف إضافي لتعريف الارتباط في مستعرضك إذا قمت بتحرير
                      أو نشر مقال. وهذا الملف لايتضمن أي بيانات شخصية فكل ما في
                      الأمر أنه يشير إلى معرّف المقالة التي حررتها. وستنتهي
                      صلاحيته بعد يوم واحد.
                    </p>
                  </li>
                  <li>
                    <h3>
                      المحتوى المضمّن من مواقع ويب أخرى
                    </h3>
                    <p>
                      المقالات على هذا الموقع قد تشمل محتوى مضمّناً (على سبيل
                      المثال: كمقاطع الفيديو، الصور، المقالات .. الخ). يتصرّف
                      المحتوى المضمَّن من مواقع ويب أخرى بالطريقة نفسها تماماً
                      كما لو أن الزائر زار الموقع الآخر.
                    </p>
                    <p>
                      قد تجمع مواقع الويب هذه بيانات عنك، وتستخدم ملفات تعريف
                      الارتباط، وتقوم بضمين تتبعًا إضافيًا – تابعًا لجهة ثالثة
                      خارجية، وتراقب تفاعلك مع هذا المحتوى المضمّن، بما في ذلك
                      تتبع تفاعلك مع المحتوى المضمن إذا كان لديك حساب وتم تسجيل
                      دخولك إلى ذلك الموقع.
                    </p>
                    <p>
                      بالنسبة للمستخدمين الذين قاموا بالتسجيل على موقعنا (إن
                      وجد)، نقوم أيضًا بتخزين المعلومات الشخصية التي يقدمونها في
                      ملف تعريف المستخدم الخاص بهم. يمكن لجميع المستخدمين
                      الاطلاع على معلوماتهم الشخصية أو تعديلها أو حذفها في أي
                      وقت (باستثناء أنه لا يمكنهم تغيير اسم المستخدم الخاص بهم).
                      يمكن لمسؤولي مواقع الويب أيضًا رؤية هذه المعلومات
                      وتحريرها.
                    </p>
                  </li>
                </ol>
                <ol>
                  <h1>
                    التحليلات و مع من نشارك بياناتك
                  </h1>
                  <li>
                    <h3>ماهي مدة احتفاظنا ببياناتك</h3>
                    <p>
                      إذا تركت تعليقاً، فسيتم الاحتفاظ بالتعليق والبيانات
                      الوصفية الخاصة به إلى أجل غير مسمى. وهذا حتى يمكننا
                      التعرّف على أي تعليقات متتابعة والموافقة عليها تلقائياً
                      بدلاً من الاحتفاظ بها في قائمة انتظار المراجعة للموافقة
                      عليها.
                    </p>
                  </li>
                  <li>
                    <h3>
                      ماهي الحقوق العائدة لك على بياناتك
                    </h3>
                    <p>
                      إذا كان لديك حساب على هذا الموقع، أو تركت تعليقات، يمكنك
                      طلب الحصول على ملف يتم تصديره من البيانات الشخصية التي
                      نحتفظ بها عنك، بما في ذلك أي بيانات قدمتها لنا. يمكنك
                      أيضًا طلب حذف أي بيانات شخصية نحتفظ بها عنك. هذا لا يشمل
                      أي بيانات نحن ملزمون بالحفاظ عليها لأغراض إدارية أو
                      قانونية أو أمنية.
                    </p>
                  </li>
                  <li>
                    <h3>إلى أين نرسل بياناتك</h3>
                    <p>
                      يمكن التحقق من تعليقات الزوار من خلال خدمة الكشف عن
                      الرسائل غير المرغوب فيها تلقائيًا.
                    </p>
                  </li>
                  <h3>معلومات الاتصال بك</h3>
                  <li>
                    <h3>معلومات إضافية</h3>
                    <ul>
                      <li>كيف نحمي بياناتك.</li>
                      <li>ماهي الإجراءات السارية تجاه الإخلال بالبيانات.</li>
                      <li>ماهي الأطراف الثالثة التي نستلم منها البيانات.</li>
                      <li>
                        ماهي آلية صنع القرار و/أو التوصيف الذي نقوم به مع بيانات
                        المستخدم.
                      </li>
                      <li>متطلبات الإفصاح من الجهة المنظمة للصناعة.</li>
                    </ul>
                  </li>
                </ol>
                <p>
                  تقوم كابتن جيرل بتحديث سياسة الخصوصية بشكل متكرر. إذا كان لديك
                  أي أسئلة ، من فضلك&nbsp;
                  <a href="callto:920012290">
                    اتصل بنا
                  </a>
                  &nbsp;أو أرسل بريدًا إلكترونيًا إلى:&nbsp;
                  <a href="mailto:info@captingirl.com">
                    info@captingirl.com
                  </a>
                </p>
              </div>
            </PrivacyContainer>
          </Container>
        </Section>
        <Footer />
      </main>
    </>
  );
};

export default Privacy;
