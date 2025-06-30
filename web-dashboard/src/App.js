import React, { useState } from 'react';
import { 
  Home, User, Shirt, ShoppingBag, BarChart3, Settings, 
  Bell, Search, Plus, TrendingUp, 
  Camera, Sparkles, Target, Zap
} from 'lucide-react';

const FitARDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showARTryOn, setShowARTryOn] = useState(false);
  const [scannedProduct, setScannedProduct] = useState(null);
  
  const [user] = useState({
    name: 'Ana Petrović',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
    plan: 'Premium',
    memberSince: 'Januar 2025'
  });

  const [stats] = useState({
    totalOutfits: 42,
    itemsInWardrobe: 156,
    outfitsThisMonth: 15,
    savingsFromAR: '€234',
    triedOnToday: 8,
    conversationRate: 85
  });

  const [recentActivity] = useState([
    { action: 'Probala Zara jaknu', time: '2 min ago', result: 'Kupila', amount: '€89' },
    { action: 'Kreirala outfit "Office Chic"', time: '1h ago', result: 'Saved', amount: null },
    { action: 'H&M pantalone try-on', time: '3h ago', result: 'Skipped', amount: null },
    { action: 'Podelila outfit na TikTok', time: '1 day ago', result: '2.3K views', amount: null }
  ]);

  const menuItems = [
    { id: 'home', icon: Home, label: 'Dashboard', badge: null },
    { id: 'profile', icon: User, label: 'Profile', badge: null },
    { id: 'wardrobe', icon: Shirt, label: 'Wardrobe', badge: '156' },
    { id: 'browse', icon: ShoppingBag, label: 'Browse', badge: 'NEW' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics', badge: null },
    { id: 'settings', icon: Settings, label: 'Settings', badge: null }
  ];

  const quickActions = [
    { icon: Camera, label: 'AR Try-On', color: 'bg-purple-600', action: 'camera' },
    { icon: Plus, label: 'Add Item', color: 'bg-green-600', action: 'add' },
    { icon: Sparkles, label: 'Style AI', color: 'bg-pink-600', action: 'ai' },
    { icon: Target, label: 'Find Look', color: 'bg-blue-600', action: 'find' }
  ];

  const handleQuickAction = (action) => {
    switch(action) {
      case 'camera':
        setShowARTryOn(true);
        break;
      case 'add':
        alert('📷 Add new item to wardrobe');
        break;
      case 'ai':
        alert('🤖 AI Style Assistant activated!');
        break;
      case 'find':
        alert('🔍 Finding perfect look for you...');
        break;
      default:
        break;
    }
  };

  const simulateBarcodeScanning = () => {
    setTimeout(() => {
      const mockProduct = {
        id: 'ZAR123456',
        name: 'Zara Basic T-Shirt',
        brand: 'Zara',
        price: '1.990 RSD',
        originalPrice: '2.490 RSD',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['White', 'Black', 'Navy'],
        inStock: true,
        storeLocation: 'Knez Mihailova 42, Belgrade',
        barcode: '8436548790123'
      };
      setScannedProduct(mockProduct);
    }, 2000);
  };

  const renderARTryOn = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl max-w-md w-full mx-4 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">📱 Live AR Try-On</h3>
            <button 
              onClick={() => {
                setShowARTryOn(false);
                setScannedProduct(null);
              }}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          <p className="text-purple-100 text-sm mt-1">Skeniraj barkod u prodavnici</p>
        </div>

        {!scannedProduct ? (
          <div className="p-6">
            <div className="bg-gray-900 rounded-lg aspect-square mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="text-white text-center">
                <Camera className="w-12 h-12 mx-auto mb-2" />
                <p className="text-sm">Usmerite kameru na barkod</p>
              </div>
              
              <div className="absolute inset-0 border-2 border-dashed border-purple-400 animate-pulse rounded-lg"></div>
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-red-500 animate-pulse"></div>
            </div>

            <button
              onClick={simulateBarcodeScanning}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors"
            >
              🔍 Simuliraj skeniranje (Demo)
            </button>

            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-sm">
                💡 <strong>U prodavnici:</strong> Skeniraj bilo koji barkod za instant AR try-on!
              </p>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex gap-4 mb-4">
              <img 
                src={scannedProduct.image} 
                alt={scannedProduct.name}
                className="w-20 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{scannedProduct.name}</h4>
                <p className="text-gray-600 text-sm">{scannedProduct.brand}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-lg font-bold text-green-600">{scannedProduct.price}</span>
                  <span className="text-sm text-gray-400 line-through">{scannedProduct.originalPrice}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-purple-50 to-pink-50 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">😍</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Tvoj avatar kaže:</p>
                  <p className="text-purple-600 text-sm">"OMG, ovo ti SAVRŠENO stoji! 💯"</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-3 border-2 border-dashed border-purple-300">
                <div className="text-center text-gray-500">
                  <Camera className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">AR Avatar Try-On Preview</p>
                  <p className="text-xs">Vidiš kako ti stoji bez presvlačenja!</p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Izaberi veličinu:</p>
              <div className="flex gap-2">
                {scannedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-3 py-1 border border-gray-300 rounded hover:border-purple-600 hover:text-purple-600 text-sm"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors">
                💳 Kupi odmah - {scannedProduct.price}
              </button>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-sm transition-colors">
                  💜 Dodaj u wishlist
                </button>
                <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg text-sm transition-colors">
                  📤 Podeli try-on
                </button>
              </div>
            </div>

            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-green-800 text-xs">
                ✅ Dostupno u {scannedProduct.storeLocation}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderHome = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dobro jutro, Ana! ☀️</h1>
            <p className="text-purple-100">Sprema si za još jedan dan savršenog stila</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{stats.triedOnToday}</div>
            <div className="text-sm text-purple-200">probanih danas</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <button
            key={index}
            onClick={() => handleQuickAction(action.action)}
            className={`${action.color} hover:opacity-90 text-white p-4 rounded-xl transition-all transform hover:scale-105 flex flex-col items-center gap-2`}
          >
            <action.icon className="w-6 h-6" />
            <span className="text-sm font-medium">{action.label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Shirt className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{stats.totalOutfits}</div>
              <div className="text-sm text-gray-600">Kreiranih outfita</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{stats.savingsFromAR}</div>
              <div className="text-sm text-gray-600">Ušteda AR-om</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Zap className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{stats.conversationRate}%</div>
              <div className="text-sm text-gray-600">Konverzija</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Nedavna aktivnost</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {recentActivity.map((activity, index) => (
            <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">{activity.action}</div>
                  <div className="text-sm text-gray-600">{activity.time}</div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium ${
                    activity.result === 'Kupila' ? 'text-green-600' :
                    activity.result === 'Skipped' ? 'text-red-600' :
                    'text-blue-600'
                  }`}>
                    {activity.result}
                  </div>
                  {activity.amount && (
                    <div className="text-sm text-gray-600">{activity.amount}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 p-3 rounded-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">AI Style Suggestion</h3>
            <p className="text-gray-600">Danas je idealno vreme za "Smart Casual" look sa tvojom novom Zara jaknom!</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Pogledaj
          </button>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
        <div className="flex items-center gap-6 mb-6">
          <img src={user.avatar} alt="Profile" className="w-20 h-20 rounded-full" />
          <div>
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.plan} Member since {user.memberSince}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Height</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="165 cm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Size Preference</label>
            <select className="w-full p-2 border border-gray-300 rounded-lg">
              <option>Size M</option>
              <option>Size S</option>
              <option>Size L</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWardrobe = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">My Wardrobe</h2>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Item
        </button>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {['Winter', 'Summer', 'Work', 'Party'].map((category) => (
          <div key={category} className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className="bg-gray-100 rounded-lg h-32 mb-3 flex items-center justify-center">
              <Shirt className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-medium text-gray-900">{category}</h3>
            <p className="text-sm text-gray-600">{Math.floor(Math.random() * 30 + 10)} items</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'home': return renderHome();
      case 'profile': return renderProfile();
      case 'wardrobe': return renderWardrobe();
      case 'browse': return (
        <div className="text-center py-12">
          <ShoppingBag className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Store Browser</h3>
          <p className="text-gray-600">Coming soon - Browse all your favorite stores in one place!</p>
        </div>
      );
      case 'analytics': return (
        <div className="text-center py-12">
          <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Style Analytics</h3>
          <p className="text-gray-600">Track your fashion journey and style evolution!</p>
        </div>
      );
      case 'settings': return (
        <div className="text-center py-12">
          <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">App Settings</h3>
          <p className="text-gray-600">Customize your FitAR experience!</p>
        </div>
      );
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
              <Shirt className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">FitAR</h1>
              <p className="text-xs text-gray-600">Fashion Revolution</p>
            </div>
          </div>
        </div>

        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <img src={user.avatar} alt="User" className="w-10 h-10 rounded-full" />
            <div className="flex-1 min-w-0">
              <div className="font-medium text-gray-900 truncate">{user.name}</div>
              <div className="text-xs text-gray-600">{user.plan}</div>
            </div>
            <Bell className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? 'bg-purple-50 text-purple-700 border-r-2 border-purple-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <span className={`ml-auto text-xs px-2 py-1 rounded-full ${
                    item.badge === 'NEW' 
                      ? 'bg-green-100 text-green-700'
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-4 text-white">
            <div className="text-sm font-medium mb-2">✨ Upgrade to Pro</div>
            <div className="text-xs text-purple-100 mb-3">Unlimited AR try-ons & AI styling</div>
            <button className="w-full bg-white text-purple-600 text-sm font-medium py-2 rounded-lg hover:bg-purple-50 transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 capitalize">{activeTab}</h1>
              <p className="text-gray-600">
                {activeTab === 'home' && 'Your fashion command center'}
                {activeTab === 'profile' && 'Manage your style preferences'}
                {activeTab === 'wardrobe' && 'Organize your digital closet'}
                {activeTab === 'browse' && 'Discover new fashion'}
                {activeTab === 'analytics' && 'Track your style journey'}
                {activeTab === 'settings' && 'Customize your experience'}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
      
      {showARTryOn && renderARTryOn()}
    </div>
  );
};

export default FitARDashboard;
