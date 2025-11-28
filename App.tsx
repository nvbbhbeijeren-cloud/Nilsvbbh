import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TravelPlanner from './components/TravelPlanner';
import InteractiveMap from './components/InteractiveMap';
import PremiumFeatures from './components/PremiumFeatures';
import Chatbot from './components/Chatbot';
import { ViewState } from './types';
import { Crown, Check, Star, CreditCard, Lock, ArrowLeft, Loader2, ShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [isPremium, setIsPremium] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'week' | 'month' | 'year'>('year');
  
  // Payment State
  const [paymentStep, setPaymentStep] = useState<'select' | 'checkout' | 'processing' | 'success'>('select');

  const getPrice = () => {
    switch(selectedPlan) {
      case 'week': return '€4,99';
      case 'month': return '€9,99';
      case 'year': return '€83,88'; // 12 * 6.99
    }
  };

  const getPlanName = () => {
    switch(selectedPlan) {
      case 'week': return 'Weekpas';
      case 'month': return 'Maandabonnement';
      case 'year': return 'Jaarabonnement';
    }
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStep('processing');
    
    // Simulate API call
    setTimeout(() => {
      setPaymentStep('success');
      setIsPremium(true);
      
      // Close modal after showing success message
      setTimeout(() => {
        setShowUpgradeModal(false);
        setPaymentStep('select'); // Reset for next time
      }, 2500);
    }, 2000);
  };

  const resetModal = () => {
    setShowUpgradeModal(false);
    setTimeout(() => setPaymentStep('select'), 300);
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return <Hero setView={setCurrentView} />;
      case ViewState.PLANNER:
        return <TravelPlanner />;
      case ViewState.MAP:
        return <InteractiveMap isPremium={isPremium} />;
      case ViewState.PREMIUM:
        return <PremiumFeatures isPremium={isPremium} triggerUpgrade={() => setShowUpgradeModal(true)} />;
      default:
        return <Hero setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 font-sans text-gray-900 selection:bg-orange-200 selection:text-orange-900">
      <Navigation currentView={currentView} setView={setCurrentView} isPremium={isPremium} />
      
      <main className="relative z-0">
        {renderView()}
      </main>

      <Chatbot />

      {/* Floating Action Button for easy upgrade toggle */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => setShowUpgradeModal(true)}
          className={`flex items-center space-x-2 px-6 py-4 rounded-full shadow-xl shadow-orange-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${isPremium ? 'bg-gray-800 text-white' : 'bg-gradient-to-r from-orange-500 to-pink-500 text-white border-2 border-white/20'}`}
        >
          <Crown size={24} className={isPremium ? "text-yellow-400" : "text-white"} />
          <span className="font-bold text-lg">{isPremium ? 'Jij bent Premium' : 'Upgrade naar Premium'}</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white py-16 mt-auto relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <div>
            <h3 className="text-3xl font-extrabold mb-6 tracking-tight">Valencia<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">finder</span></h3>
            <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
              Het ultieme platform om Valencia te ontdekken als een local. Gemaakt voor zonliefhebbers, avonturiers en levensgenieters.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-400">Navigatie</h4>
            <ul className="space-y-3 text-blue-200 text-sm">
              <li className="hover:text-white hover:translate-x-1 transition-transform cursor-pointer flex items-center" onClick={() => setCurrentView(ViewState.HOME)}>Home</li>
              <li className="hover:text-white hover:translate-x-1 transition-transform cursor-pointer flex items-center" onClick={() => setCurrentView(ViewState.MAP)}>Hotspots</li>
              <li className="hover:text-white hover:translate-x-1 transition-transform cursor-pointer flex items-center" onClick={() => setCurrentView(ViewState.PLANNER)}>Reisplanner</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-400">Vamos!</h4>
            <p className="text-blue-200 text-sm mb-4">
              Heb je vragen of wil je partner worden?
            </p>
            <a href="mailto:info@valenciafinder.es" className="inline-block bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full text-white transition-colors border border-white/10">
              info@valenciafinder.es
            </a>
          </div>
        </div>
      </footer>

      {/* Upgrade / Payment Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-indigo-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-[2rem] max-w-lg w-full p-6 md:p-8 relative animate-fade-in shadow-2xl border-4 border-orange-100 my-8">
            
            {/* Close Button */}
            {!isPremium && paymentStep !== 'success' && paymentStep !== 'processing' && (
              <button 
                onClick={resetModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-orange-500 transition-colors bg-gray-100 hover:bg-orange-50 rounded-full p-2 z-10"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            )}

            {/* Content Switcher */}
            {isPremium ? (
               <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck size={40} className="text-green-600" />
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 mb-2">Je bent Premium!</h2>
                  <p className="text-gray-500 mb-8">Je abonnement is actief. Geniet van alle voordelen.</p>
                  <button onClick={resetModal} className="bg-gray-900 text-white font-bold py-3 px-8 rounded-full">Sluiten</button>
               </div>
            ) : paymentStep === 'select' ? (
              <>
                <div className="text-center mb-6 mt-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg shadow-orange-200 ring-4 ring-orange-50">
                    <Crown size={28} />
                  </div>
                  <h2 className="text-2xl font-extrabold text-gray-900">Word Valencia <span className="text-orange-500">Insider</span></h2>
                  <p className="text-gray-500 mt-2 text-sm">Kies het abonnement dat bij jouw reis past.</p>
                </div>

                <div className="grid grid-cols-1 gap-3 mb-6">
                  {/* Week Plan */}
                  <div 
                      onClick={() => setSelectedPlan('week')}
                      className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedPlan === 'week' ? 'border-orange-500 bg-orange-50 shadow-md' : 'border-gray-100 hover:border-orange-200'}`}
                  >
                      <div className="flex justify-between items-center">
                        <div>
                            <h4 className="font-bold text-gray-900">Weekpas</h4>
                            <p className="text-xs text-gray-500">Ideaal voor een citytrip</p>
                        </div>
                        <div className="text-right">
                            <span className="text-xl font-black text-orange-600">€4,99</span>
                            <span className="text-xs text-gray-400 block">/ week</span>
                        </div>
                      </div>
                  </div>

                  {/* Month Plan */}
                  <div 
                      onClick={() => setSelectedPlan('month')}
                      className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedPlan === 'month' ? 'border-orange-500 bg-orange-50 shadow-md' : 'border-gray-100 hover:border-orange-200'}`}
                  >
                      <div className="flex justify-between items-center">
                        <div>
                            <h4 className="font-bold text-gray-900">Maand</h4>
                            <p className="text-xs text-gray-500">Flexibel per maand</p>
                        </div>
                        <div className="text-right">
                            <span className="text-xl font-black text-orange-600">€9,99</span>
                            <span className="text-xs text-gray-400 block">/ maand</span>
                        </div>
                      </div>
                  </div>

                  {/* Year Plan */}
                  <div 
                      onClick={() => setSelectedPlan('year')}
                      className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedPlan === 'year' ? 'border-orange-500 bg-orange-50 shadow-md ring-1 ring-orange-200' : 'border-gray-100 hover:border-orange-200'}`}
                  >
                      <div className="absolute -top-3 left-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center">
                        <Star size={10} className="mr-1 fill-white" /> BESTE DEAL
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <div>
                            <h4 className="font-bold text-gray-900">Jaar</h4>
                            <p className="text-xs text-gray-500">Voor de echte liefhebber</p>
                        </div>
                        <div className="text-right">
                            <span className="text-xl font-black text-orange-600">€6,99</span>
                            <span className="text-xs text-gray-400 block">/ maand</span>
                        </div>
                      </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                  <div className="flex items-center text-gray-700 text-sm">
                    <div className="bg-green-100 p-1 rounded-full mr-3"><Check className="text-green-600" size={14} /></div>
                    <span className="font-medium">Exclusieve kortingen bij 50+ partners</span>
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <div className="bg-green-100 p-1 rounded-full mr-3"><Check className="text-green-600" size={14} /></div>
                    <span className="font-medium">Onbeperkt Audio tours</span>
                  </div>
                </div>

                <button
                  onClick={() => setPaymentStep('checkout')}
                  className="w-full py-4 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-orange-400 to-pink-600 hover:from-orange-500 hover:to-pink-700 transition-all shadow-lg shadow-orange-500/30 transform hover:scale-[1.02] flex justify-center items-center"
                >
                  Ga naar betalen
                </button>
              </>
            ) : paymentStep === 'checkout' ? (
              <div className="animate-fade-in">
                <button 
                  onClick={() => setPaymentStep('select')}
                  className="flex items-center text-gray-500 hover:text-gray-900 mb-6 text-sm font-bold"
                >
                  <ArrowLeft size={16} className="mr-1" /> Terug
                </button>
                
                <h3 className="text-2xl font-black text-gray-900 mb-6">Afrekenen</h3>
                
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 mb-6 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Gekozen plan</p>
                    <p className="font-bold text-gray-900">{getPlanName()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-black text-orange-600">{getPrice()}</p>
                  </div>
                </div>

                <form onSubmit={handlePayment} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 ml-1 uppercase">Naam op kaart</label>
                    <input required type="text" placeholder="J. de Vries" className="w-full bg-white border-2 border-gray-100 rounded-xl px-4 py-3 font-medium focus:outline-none focus:border-orange-400 transition-colors" />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 ml-1 uppercase">Kaartnummer</label>
                    <div className="relative">
                      <input required type="text" placeholder="0000 0000 0000 0000" maxLength={19} className="w-full bg-white border-2 border-gray-100 rounded-xl px-4 py-3 pl-12 font-medium focus:outline-none focus:border-orange-400 transition-colors" />
                      <CreditCard className="absolute left-4 top-3.5 text-gray-400" size={20} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1 ml-1 uppercase">Vervaldatum</label>
                      <input required type="text" placeholder="MM/JJ" maxLength={5} className="w-full bg-white border-2 border-gray-100 rounded-xl px-4 py-3 font-medium focus:outline-none focus:border-orange-400 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1 ml-1 uppercase">CVC</label>
                      <div className="relative">
                        <input required type="text" placeholder="123" maxLength={3} className="w-full bg-white border-2 border-gray-100 rounded-xl px-4 py-3 pl-10 font-medium focus:outline-none focus:border-orange-400 transition-colors" />
                        <Lock className="absolute left-3.5 top-3.5 text-gray-400" size={16} />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl font-bold text-lg text-white bg-gray-900 hover:bg-black transition-all shadow-lg flex justify-center items-center"
                    >
                      Betaal {getPrice()}
                    </button>
                    <div className="flex justify-center items-center mt-4 text-gray-400 text-xs">
                       <Lock size={12} className="mr-1" /> Veilig betalen via SSL
                    </div>
                  </div>
                </form>
              </div>
            ) : paymentStep === 'processing' ? (
              <div className="py-20 text-center animate-fade-in">
                <Loader2 size={48} className="animate-spin text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">Betaling verwerken...</h3>
                <p className="text-gray-500 mt-2">Een ogenblik geduld alstublieft.</p>
              </div>
            ) : (
              <div className="py-12 text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <Check size={40} className="text-green-600" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-2">Betaling Geslaagd!</h3>
                <p className="text-gray-500">Welkom bij de club. Je hebt nu onbeperkt toegang.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;