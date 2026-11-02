import React, { useState } from 'react';

export default function App() {
  const [step, setStep] = useState(1); // مراحل فرم فروش (۱: انتخاب برند، ۲: مدل و سال، ۳: کارکرد و شهر، ۴: انتخاب شعبه و ثبت نهایی)
  const [activeTab, setActiveTab] = useState('sell'); // تب‌های اصلی (sell: فروش فوری، buy: خرید خودرو، pricing: قیمت روز، about: درباره ما)
  
  const [formData, setFormData] = useState({
    brand: 'ایران خودرو',
    model: 'دنا پلاس توربو اتوماتیک',
    year: '۱۴۰۲',
    trim: 'فول آپشن',
    km: '۱۵,۰۰۰',
    city: 'تهران',
    branch: 'شعبه مرکزی (تهران - سعادت‌آباد)',
    date: 'فردا - ساعت ۱۱:۰۰ صبح',
    phone: '09366681963'
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const brands = [
    { name: 'ایران خودرو', count: '۴۲ مدل', icon: '🚗' },
    { name: 'سایپا', count: '۳۸ مدل', icon: '🚙' },
    { name: 'مدیران خودرو', count: '۲۵ مدل', icon: '🚘' },
    { name: 'تویوتا و لکسوس', count: '۱۹ مدل', icon: '🏎️' },
    { name: 'هیوندای و کیا', count: '۲۲ مدل', icon: '🚓' },
    { name: 'کرمان موتور', count: '۱۵ مدل', icon: '🚐' }
  ];

  const availableCars = [
    { id: 1, name: 'دنا پلاس توربو اتوماتیک', year: 1402, km: '۱۵,۰۰۰', price: '۸۲۵,۰۰۰,۰۰۰ تومان', condition: 'تایید شده - کارشناسی ۱۴۵ نقطه‌ای', badge: 'فروش فوری', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80' },
    { id: 2, name: 'شاهین G دنده‌ای', year: 1403, km: 'صفر کیلومتر', price: '۷۱۰,۰۰۰,۰۰۰ تومان', condition: 'سند آزاد - تحویل روز', badge: 'ویژه ۶۰', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
    { id: 3, name: 'تیگو ۷ پرو پرمیوم', year: 1402, km: '۸,۰۰۰', price: '۱,۵۸۰,۰۰۰,۰۰۰ تومان', condition: 'گارانتی فعال - بدون رنگ', badge: 'کارشناسی AI', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
    { id: 4, name: 'تارا V4 اتوماتیک', year: 1402, km: '۱۲,۰۰۰', price: '۸۹۰,۰۰۰,۰۰۰ تومان', condition: 'مشابه صفر - بدنه پلمپ', badge: 'تایید شده', img: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80' }
  ];

  const marketPrices = [
    { car: 'دنا پلاس توربو 6 دنده', factory: '۶۳۵,۰۰۰,۰۰۰', market: '۸۱۵,۰۰۰,۰۰۰', change: '+1.2%' },
    { car: 'تارا اتوماتیک V4', factory: '۶۹۰,۰۰۰,۰۰۰', market: '۸۸۵,۰۰۰,۰۰۰', change: '+0.8%' },
    { car: 'شاهین پلاس اتومات', factory: '۶۷۰,۰۰۰,۰۰۰', market: '۷۹۵,۰۰۰,۰۰۰', change: '-0.4%' },
    { car: 'تیگو ۷ پرو پرمیوم', factory: '۱,۴۵۰,۰۰۰,۰۰۰', market: '۱,۵۹۰,۰۰۰,۰۰۰', change: '+2.1%' }
  ];

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-red-600 selection:text-white" dir="rtl">
      {/* هدر سایت مشابه الگوهای برتر */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('sell')}>
            <div className="w-12 h-12 bg-gradient-to-tr from-red-600 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/30">
              <span className="text-xl font-black text-white">۶۰</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-black tracking-tight text-white">خودرو۶۰</h1>
                <span className="text-[10px] px-2 py-0.5 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full font-bold">زیرمجموعه رویال فام</span>
              </div>
              <p className="text-[11px] text-slate-400">سامانه هوشمند معامله سریع خودرو</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <button onClick={() => setActiveTab('sell')} className={`transition-all ${activeTab === 'sell' ? 'text-red-500 border-b-2 border-red-500 pb-1' : 'text-slate-300 hover:text-white'}`}>فروش فوری خودرو</button>
            <button onClick={() => setActiveTab('buy')} className={`transition-all ${activeTab === 'buy' ? 'text-red-500 border-b-2 border-red-500 pb-1' : 'text-slate-300 hover:text-white'}`}>خرید خودرو</button>
            <button onClick={() => setActiveTab('pricing')} className={`transition-all ${activeTab === 'pricing' ? 'text-red-500 border-b-2 border-red-500 pb-1' : 'text-slate-300 hover:text-white'}`}>قیمت روز خودرو</button>
            <button onClick={() => setActiveTab('about')} className={`transition-all ${activeTab === 'about' ? 'text-red-500 border-b-2 border-red-500 pb-1' : 'text-slate-300 hover:text-white'}`}>درباره رویال فام</button>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:09366681963" className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              ۰۹۳۶۶۶۸۱۹۶۳
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10">
        {activeTab === 'sell' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block bg-red-600/10 text-red-400 border border-red-500/30 text-xs px-3.5 py-1.5 rounded-full font-bold">
                  بازوی رسمی هوش مصنوعی معامله خودرو در ایران
                </span>
                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                  فروش سریع خودرو در شعبه با <span className="text-red-500">تسویه حساب آنی</span>
                </h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  بدون دغدغه دلالان و آگهی‌های فریبنده. کارشناسی رایگان در ۱۴۵ نقطه، تعیین قیمت بر اساس ارزش واقعی بازار و واریز وجه در کمتر از ۲ روز کاری.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center">
                    <span className="block text-xl font-black text-red-500">۱۴۵ نقطه</span>
                    <span className="text-xs text-slate-400">کارشناسی تخصصی رایگان</span>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center">
                    <span className="block text-xl font-black text-amber-500">مزایده آنلاین</span>
                    <span className="text-xs text-slate-400">بالاترین قیمت پیشنهادی</span>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center">
                    <span className="block text-xl font-black text-emerald-500">دفترخانه</span>
                    <span className="text-xs text-slate-400">انتقال سند قانونی</span>
                  </div>
                </div>
              </div>

              {/* کادر مرحله‌ای فرم فروش دقیق مشابه موتور جستجوی خودرو۴۵ */}
              <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <h3 className="text-lg font-black text-white">ثبت‌نام درخواست فروش خودرو</h3>
                  <span className="text-xs text-red-500 font-bold">مرحله {step} از ۴</span>
                </div>

                {success ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-6 rounded-2xl text-center space-y-3">
                    <h4 className="font-bold text-lg">قرار کارشناسی ثبت شد!</h4>
                    <p className="text-xs text-slate-300">پیامک تایید نهایی و جزئیات شعبه به شماره {formData.phone} ارسال شد.</p>
                    <button onClick={() => { setSuccess(false); setStep(1); }} className="mt-4 bg-slate-800 text-white px-4 py-2 rounded-xl text-xs font-bold">ثبت خودروی دیگر</button>
                  </div>
                ) : (
                  <div>
                    {step === 1 && (
                      <div className="space-y-4">
                        <label className="block text-xs font-semibold text-slate-300">برند خودروی خود را انتخاب کنید:</label>
                        <div className="grid grid-cols-2 gap-3">
                          {brands.map((b, idx) => (
                            <button 
                              key={idx}
                              type="button"
                              onClick={() => { setFormData({...formData, brand: b.name}); setStep(2); }}
                              className="bg-slate-950 border border-slate-800 hover:border-red-500 p-4 rounded-2xl text-right transition-all flex items-center justify-between"
                            >
                              <div>
                                <span className="block font-bold text-sm text-slate-200">{b.name}</span>
                                <span className="text-[10px] text-slate-500">{b.count}</span>
                              </div>
                              <span className="text-lg">{b.icon}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-2">مدل دقیق خودرو ({formData.brand})</label>
                          <input 
                            type="text" 
                            value={formData.model} 
                            onChange={(e) => setFormData({...formData, model: e.target.value})} 
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-red-500" 
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-2">سال ساخت</label>
                          <select 
                            value={formData.year} 
                            onChange={(e) => setFormData({...formData, year: e.target.value})}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-red-500"
                          >
                            <option value="۱۴۰۳">۱۴۰۳</option>
                            <option value="۱۴۰۲">۱۴۰۲</option>
                            <option value="۱۴۰۱">۱۴۰۱</option>
                            <option value="۱۴۰۰">۱۴۰۰</option>
                            <option value="۱۳۹۹">۱۳۹۹ و پایین‌تر</option>
                          </select>
                        </div>
                        <div className="flex gap-3 pt-2">
                          <button onClick={() => setStep(1)} className="w-1/3 bg-slate-800 text-slate-300 py-3 rounded-xl text-xs font-bold">مرحله قبل</button>
                          <button onClick={() => setStep(3)} className="w-2/3 bg-red-600 hover:bg-red-500 text-white py-3 rounded-xl text-xs font-bold shadow-lg shadow-red-600/30">مرحله بعد</button>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-2">تقریباً چند کیلومتر کار کرده است؟</label>
                          <input 
                            type="text" 
                            value={formData.km} 
                            onChange={(e) => setFormData({...formData, km: e.target.value})} 
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-red-500" 
                            placeholder="مثال: ۲۵,۰۰۰"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-2">شهر محل بازدید</label>
                          <input 
                            type="text" 
                            value={formData.city} 
                            onChange={(e) => setFormData({...formData, city: e.target.value})} 
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-red-500" 
                          />
                        </div>
                        <div className="flex gap-3 pt-2">
                          <button onClick={() => setStep(2)} className="w-1/3 bg-slate-800 text-slate-300 py-3 rounded-xl text-xs font-bold">مرحله قبل</button>
                          <button onClick={() => setStep(4)} className="w-2/3 bg-red-600 hover:bg-red-500 text-white py-3 rounded-xl text-xs font-bold shadow-lg shadow-red-600/30">تعیین شعبه و نوبت</button>
                        </div>
                      </div>
                    )}

                    {step === 4 && (
                      <form onSubmit={handleFinalSubmit} className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">انتخاب شعبه کارشناسی</label>
                          <select 
                            value={formData.branch} 
                            onChange={(e) => setFormData({...formData, branch: e.target.value})}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200"
                          >
                            <option value="شعبه مرکزی (تهران - سعادت‌آباد)">شعبه مرکزی (تهران - سعادت‌آباد)</option>
                            <option value="شعبه شرق (تهران - تهرانپارس)">شعبه شرق (تهران - تهرانپارس)</option>
                            <option value="شعبه کرج (میدان استاندارد)">شعبه کرج (میدان استاندارد)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">شماره موبایل جهت ارسال تاییدیه</label>
                          <input 
                            type="text" 
                            required 
                            value={formData.phone} 
                            onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200" 
                          />
                        </div>
                        <div className="flex gap-3 pt-2">
                          <button type="button" onClick={() => setStep(3)} className="w-1/3 bg-slate-800 text-slate-300 py-3 rounded-xl text-xs font-bold">مرحله قبل</button>
                          <button type="submit" disabled={submitting} className="w-2/3 bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl text-xs font-bold shadow-lg shadow-emerald-600/30">
                            {submitting ? 'در حال ثبت...' : 'تایید نهایی قرار فروش'}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'buy' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-black">خودروهای موجود با کارشناسی رسمی رویال فام</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {availableCars.map((car) => (
                <div key={car.id} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-red-500 transition-all flex flex-col justify-between">
                  <div className="relative h-48 bg-slate-950">
                    <img src={car.img} alt={car.name} className="w-full h-full object-cover" />
                    <span className="absolute top-3 right-3 bg-red-600 text-white text-[10px] px-3 py-1 rounded-full font-bold">{car.badge}</span>
                  </div>
                  <div className="p-6 space-y-4">
                    <span className="text-xs text-red-500 font-semibold">{car.year} | کارکرد: {car.km}</span>
                    <h3 className="text-lg font-black text-white">{car.name}</h3>
                    <p className="text-xs text-slate-400">{car.condition}</p>
                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                      <span className="text-base font-black text-emerald-400">{car.price}</span>
                      <button onClick={() => alert('درخواست بازدید ثبت شد.')} className="bg-red-600 text-white px-4 py-2 rounded-xl text-xs font-bold">رزرو بازدید</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-black">قیمت روز خودروهای داخلی و مونتاژ</h2>
              <p className="text-xs text-slate-400">به‌روزرسانی شده بر اساس معاملات واقعی بازار و تحلیل هوش مصنوعی رویال فام</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden p-6">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 pb-3">
                    <th className="pb-3">مدل خودرو</th>
                    <th className="pb-3">قیمت کارخانه</th>
                    <th className="pb-3">قیمت بازار آزاد</th>
                    <th className="pb-3">تغییرات هفته</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {marketPrices.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-950/50">
                      <td className="py-4 font-bold text-slate-200">{item.car}</td>
                      <td className="py-4 text-slate-400">{item.factory} تومان</td>
                      <td className="py-4 text-emerald-400 font-bold">{item.market} تومان</td>
                      <td className="py-4 text-red-400 font-semibold">{item.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-slate-800 mt-20 bg-slate-900/50 py-8 text-center text-xs text-slate-400">
        <p>© تمامی حقوق برای پلتفرم «خودرو۶۰» (زیرمجموعه استارتاپ رویال فام) محفوظ است.</p>
        <p className="mt-1">پشتیبانی و ارتباط با مدیریت: <span className="text-white font-bold">۰۹۳۶۶۶۸۱۹۶۳</span></p>
      </footer>
    </div>
  );
}
