import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('sell');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [sellForm, setSellForm] = useState({ brand: 'تویوتا', model: '', year: '1402', km: '', phone: '09366681963', city: 'تهران' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const brands = [
    { id: 'all', name: 'همه برندها' },
    { id: 'saipa', name: 'سایپا' },
    { id: 'iran-khodro', name: 'ایران خودرو' },
    { id: 'chery', name: 'مدیران خودرو' },
    { id: 'hyundai', name: 'هیوندای و کیا' },
    { id: 'toyota', name: 'تویوتا و وارداتی' }
  ];

  const carsForSale = [
    { id: 1, brand: 'iran-khodro', name: 'دنا پلاس توربو اتوماتیک', year: 1402, km: '۱۵,۰۰۰ کیلومتر', price: '۸۲۵,۰۰۰,۰۰۰ تومان', condition: 'بدون رنگ و خط و خش', badge: 'فروش فوری', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80' },
    { id: 2, brand: 'saipa', name: 'شاهین G دنده‌ای', year: 1403, km: 'کارکرد صفر', price: '۷۱۰,۰۰۰,۰۰۰ تومان', condition: 'تحویل روز - سند آزاد', badge: 'ویژه ۶۰', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
    { id: 3, brand: 'chery', name: 'تیگو ۷ پرو پرمیوم', year: 1402, km: '۸,۰۰۰ کیلومتر', price: '۱,۵۸۰,۰۰۰,۰۰۰ تومان', condition: 'فول آپشن - گارانتی فعال', badge: 'کارشناسی AI', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },
    { id: 4, brand: 'hyundai', name: 'سانتافه مدل 2017', year: 2017, km: '۶۵,۰۰۰ کیلومتر', price: '۳,۴۵۰,۰۰۰,۰۰۰ تومان', condition: 'دو دف - فول کامل', badge: 'تایید شده', image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80' },
    { id: 5, brand: 'toyota', name: 'لندکروزر VXR', year: 2013, km: '۱۲۰,۰۰۰ کیلومتر', price: '۹,۵۰۰,۰۰۰,۰۰۰ تومان', condition: 'استثنایی و سالم', badge: 'کلکسیونی', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80' },
    { id: 6, brand: 'iran-khodro', name: 'تارا V4 اتوماتیک', year: 1402, km: '۱۲,۰۰۰ کیلومتر', price: '۸۹۰,۰۰۰,۰۰۰ تومان', condition: 'مشابه صفر', badge: 'فروش فوری', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80' }
  ];

  const filteredCars = selectedBrand === 'all' ? carsForSale : carsForSale.filter(c => c.brand === selectedBrand);

  const handleSellSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
      setSellForm({ brand: 'تویوتا', model: '', year: '1402', km: '', phone: '09366681963', city: 'تهران' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-red-600 selection:text-white" dir="rtl">
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('sell')}>
            <div className="w-12 h-12 bg-gradient-to-tr from-red-600 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/30">
              <span className="text-xl font-black text-white">۶۰</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-black tracking-tight text-white">خودرو۶۰</h1>
                <span className="text-[10px] px-2 py-0.5 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full font-bold">رویال فام AI</span>
              </div>
              <p className="text-[11px] text-slate-400">سامانه هوشمند معامله سریع خودرو</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <button onClick={() => setActiveTab('sell')} className={`transition-all ${activeTab === 'sell' ? 'text-red-500 border-b-2 border-red-500 pb-1' : 'text-slate-300 hover:text-white'}`}>فروش فوری خودرو</button>
            <button onClick={() => setActiveTab('buy')} className={`transition-all ${activeTab === 'buy' ? 'text-red-500 border-b-2 border-red-500 pb-1' : 'text-slate-300 hover:text-white'}`}>خرید خودرو</button>
            <button onClick={() => setActiveTab('pricing')} className={`transition-all ${activeTab === 'pricing' ? 'text-red-500 border-b-2 border-red-500 pb-1' : 'text-slate-300 hover:text-white'}`}>قیمت‌گذاری هوشمند AI</button>
          </nav>
          <a href="tel:09366681963" className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>۰۹۳۶۶۶۸۱۹۶۳
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10">
        {activeTab === 'sell' && (
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block bg-red-600/10 text-red-400 border border-red-500/30 text-xs px-3.5 py-1.5 rounded-full font-bold">اولین بازوی هوشمند معامله خودرو در ایران</span>
                <h2 className="text-4xl md:text-6xl font-black leading-tight">فروش مطمئن خودرو در <span className="text-red-500">کمتر از ۶۰ دقیقه</span></h2>
                <p className="text-slate-300 text-base leading-relaxed">بدون نیاز به درج آگهی و پاسخگویی به دلالان. کارشناسی تخصصی ۱۴۵ نقطه‌ای در محل و تسویه حساب آنی.</p>
              </div>
              <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl space-y-6">
                <h3 className="text-xl font-black text-white">ثبت درخواست فروش فوری</h3>
                {success ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-6 rounded-2xl text-center">
                    <h4 className="font-bold">درخواست ثبت شد! به زودی تماس می‌گیریم.</h4>
                  </div>
                ) : (
                  <form onSubmit={handleSellSubmit} className="space-y-4">
                    <input type="text" required placeholder="برند خودرو (مثال: تویوتا)" value={sellForm.brand} onChange={(e) => setSellForm({...sellForm, brand: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200" />
                    <input type="text" required placeholder="مدل دقیق (مثال: لندکروزر)" value={sellForm.model} onChange={(e) => setSellForm({...sellForm, model: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200" />
                    <input type="text" required value={sellForm.phone} onChange={(e) => setSellForm({...sellForm, phone: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200" />
                    <button type="submit" className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-xl text-sm shadow-lg shadow-red-600/30">ثبت درخواست کارشناسی رایگان</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'buy' && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-2xl font-black">خودروهای کارشناسی شده خودرو۶۰</h2>
              <div className="flex flex-wrap gap-2">
                {brands.map(b => (
                  <button key={b.id} onClick={() => setSelectedBrand(b.id)} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedBrand === b.id ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}>{b.name}</button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map(car => (
                <div key={car.id} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-red-500/50 transition-all flex flex-col justify-between">
                  <div className="relative h-48 bg-slate-950 overflow-hidden">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                    <span className="absolute top-3 right-3 bg-red-600 text-white text-[10px] px-3 py-1 rounded-full font-bold">{car.badge}</span>
                  </div>
                  <div className="p-6 space-y-4">
                    <span className="text-xs text-red-500 font-semibold">{car.year} | {car.km}</span>
                    <h3 className="text-lg font-black text-white">{car.name}</h3>
                    <p className="text-xs text-slate-400">{car.condition}</p>
                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                      <span className="text-base font-black text-emerald-400">{car.price}</span>
                      <button onClick={() => alert('درخواست رزرو ثبت شد.')} className="bg-red-600 text-white px-4 py-2 rounded-xl text-xs font-bold">رزرو خودرو</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
