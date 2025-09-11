import React from "react";
import {
  Mail,
  Instagram,
  Facebook,
  Music2,
  MapPin,
  Clock,
  MessageCircle,
  Building2,
} from "lucide-react";

const Contact: React.FC = () => {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "مرحباً! أريد الاستفسار عن منتجاتكم في محمصة الماسة - فرع القاهرة الجديدة 🌟"
    );
    window.open(`https://wa.me/01098981616?text=${message}`, "_blank");
  };

  const handleWhatsAppContactShorouk = () => {
    const message = encodeURIComponent(
      "مرحباً! أريد الاستفسار عن منتجاتكم في محمصة الماسة - فرع الشروق 🌟"
    );
    window.open(`https://wa.me/01122004410?text=${message}`, "_blank");
  };

  const handleNewCairoLocation = () => {
    window.open("https://maps.app.goo.gl/3vfXStvfQnGW5yV46", "_blank");
  };

  const handleShoroukLocation = () => {
    window.open("https://maps.app.goo.gl/LvC4gUH2SLtHv1wT6", "_blank");
  };

  const handleEmailContact = () => {
    window.open(
      "mailto:info@almasahroastery.com?subject=استفسار عن محمصة الماسة",
      "_self"
    );
  };

  const handleInstagramVisit = () => {
    window.open("https://www.instagram.com/roasteryalmasah/", "_blank");
  };

  const handleFacebookVisit = () => {
    window.open("https://www.facebook.com/AlmasahRoastery", "_blank");
  };

  const handleTikTokVisit = () => {
    window.open("https://www.tiktok.com/@almasahroastery", "_blank");
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brown-800 dark:text-brown-200 mb-3 sm:mb-4">
              تواصل معنا
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4 sm:px-0">
              نحن هنا لخدمتك في فرعين مختلفين
            </p>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mt-2">
              فرع القاهرة الجديدة • فرع الشروق
            </p>
          </div>

          {/* Two Locations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
            {/* New Cairo Branch */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg transition-colors duration-200">
              <h3 className="text-xl sm:text-2xl font-bold text-brown-800 dark:text-brown-200 mb-6 sm:mb-8 text-center flex items-center justify-center gap-2">
                <Building2 className="w-6 h-6 text-brown-600 dark:text-brown-300" />
                فرع القاهرة الجديدة
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {/* WhatsApp New Cairo */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg transition-colors duration-200">
                    <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-brown-800 dark:text-brown-200 mb-2">
                      واتساب (فرع القاهرة الجديدة)
                    </h4>
                    <p
                      className="text-gray-700 dark:text-gray-300 mb-2 text-lg font-semibold"
                      dir="ltr"
                    >
                      01098981616
                    </p>
                    <button
                      onClick={handleWhatsAppContact}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                    >
                      راسلنا على واتساب
                    </button>
                  </div>
                </div>

                {/* New Cairo Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg transition-colors duration-200">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-brown-800 dark:text-brown-200 mb-2">
                      عنوان فرع القاهرة الجديدة
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      القاهرة الجديدة
                    </p>
                    <button
                      onClick={handleNewCairoLocation}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                    >
                      افتح الموقع على خرائط جوجل
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* El Shorouk Branch */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg transition-colors duration-200">
              <h3 className="text-xl sm:text-2xl font-bold text-brown-800 dark:text-brown-200 mb-6 sm:mb-8 text-center flex items-center justify-center gap-2">
                <Building2 className="w-6 h-6 text-brown-600 dark:text-brown-300" />
                فرع الشروق
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {/* WhatsApp El Shorouk */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg transition-colors duration-200">
                    <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-brown-800 dark:text-brown-200 mb-2">
                      واتساب (فرع الشروق)
                    </h4>
                    <p
                      className="text-gray-700 dark:text-gray-300 mb-2 text-lg font-semibold"
                      dir="ltr"
                    >
                      01122004410
                    </p>
                    <button
                      onClick={handleWhatsAppContactShorouk}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                    >
                      راسلنا على واتساب
                    </button>
                  </div>
                </div>

                {/* El Shorouk Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg transition-colors duration-200">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-brown-800 dark:text-brown-200 mb-2">
                      عنوان فرع الشروق
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      الشروق
                    </p>
                    <button
                      onClick={handleShoroukLocation}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                    >
                      افتح الموقع على خرائط جوجل
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Contact Information */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-brown-800 dark:text-brown-200 mb-6 sm:mb-8 text-center">
              طرق التواصل الإضافية
            </h3>

            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Email */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg text-center transition-colors duration-200">
                <div className="bg-red-100 dark:bg-red-900 p-3 rounded-lg inline-block mb-4 transition-colors duration-200">
                  <Mail className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h4 className="font-bold text-brown-800 dark:text-brown-200 mb-2">
                  البريد الإلكتروني
                </h4>
                <p
                  className="text-gray-700 dark:text-gray-300 mb-3 text-sm"
                  dir="ltr"
                >
                  info@almasahroastery.com
                </p>
                <button
                  onClick={handleEmailContact}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                >
                  أرسل إيميل
                </button>
              </div>

              {/* Instagram */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center transition-colors duration-200">
                <div className="bg-pink-100 dark:bg-pink-900 p-3 rounded-lg inline-block mb-4 transition-colors duration-200">
                  <Instagram className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <h4 className="font-bold text-brown-800 dark:text-brown-200 mb-2">
                  إنستجرام
                </h4>
                <p
                  className="text-gray-700 dark:text-gray-300 mb-3"
                  dir="ltr"
                >
                  @almasah_roastery
                </p>
                <button
                  onClick={handleInstagramVisit}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                >
                  تابعنا
                </button>
              </div>

              {/* Facebook */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center transition-colors duration-200">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg inline-block mb-4 transition-colors duration-200">
                  <Facebook className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-brown-800 dark:text-brown-200 mb-2">
                  فيسبوك
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  صفحتنا الرسمية
                </p>
                <button
                  onClick={handleFacebookVisit}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                >
                  زور صفحتنا
                </button>
              </div>

              {/* TikTok */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center transition-colors duration-200">
                <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded-lg inline-block mb-4 transition-colors duration-200">
                  <Music2 className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </div>
                <h4 className="font-bold text-brown-800 dark:text-brown-200 mb-2">
                  تيك توك
                </h4>
                <p
                  className="text-gray-700 dark:text-gray-300 mb-3"
                  dir="ltr"
                >
                  @almasahroastery
                </p>
                <button
                  onClick={handleTikTokVisit}
                  className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                >
                  شاهد فيديوهاتنا
                </button>
              </div>
            </div>
          </div>

          {/* Working Hours and Quick Order */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Working Hours */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg transition-colors duration-200">
              <h3 className="text-xl sm:text-2xl font-bold text-brown-800 dark:text-brown-200 mb-6 text-center flex items-center justify-center gap-2">
                <Clock className="w-6 h-6 text-brown-600 dark:text-brown-300" />
                ساعات العمل
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    السبت - الخميس
                  </span>
                  <span className="font-semibold text-brown-800 dark:text-brown-200 text-sm sm:text-base">
                    8:00 ص - 12:00 م
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    الجمعة
                  </span>
                  <span className="font-semibold text-brown-800 dark:text-brown-200 text-sm sm:text-base">
                    2:00 م - 12:00 م
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Order Section */}
            <div className="bg-gradient-to-br from-gold-50 to-brown-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 sm:p-8 shadow-lg transition-colors duration-200">
              <h3 className="text-xl sm:text-2xl font-bold text-brown-800 dark:text-brown-200 mb-6 text-center">
                🚀 اطلب الآن!
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-center text-sm sm:text-base">
                جرب مشروباتنا المميزة واستمتع بطعم لا يُنسى
              </p>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
                <button
                  onClick={handleWhatsAppContact}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  فرع القاهرة
                </button>
                <button
                  onClick={handleWhatsAppContactShorouk}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  فرع الشروق
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
