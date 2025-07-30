import React, { useState } from 'react';
import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal, Plus, Search, Bell, Mail, User, Home, TrendingUp, Settings } from 'lucide-react';
import UserList from './UserList';
import PostList from './PostList';

const SocialMediaPlatform = () => {
    const [activeTab, setActiveTab] = useState('home');





    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="w-full px-4 py-3">
                    <div className="flex items-center justify-between w-full ">


                        <div className="flex items-center space-x-6">
                            <h1 className="text-2xl font-bold text-blue-600">Sociafly</h1>

                            <nav className="flex space-x-4  ">
                                <button
                                    onClick={() => setActiveTab('home')}
                                    className={`flex items-center space-x-2 px-2 lg:px-3 py-2 rounded-lg transition-colors ${
                                        activeTab === 'home' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600'
                                    }`}
                                >
                                    <Home size={20}  />
                                    <span className="hidden lg:inline">Ana Sayfa</span>
                                </button>

                                <button
                                    onClick={() => setActiveTab('trending')}
                                    className={`flex items-center space-x-2 px-2 lg:px-3 py-2 rounded-lg transition-colors ${
                                        activeTab === 'trending' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600'
                                    }`}
                                >
                                    <TrendingUp size={20} />
                                    <span className="hidden lg:inline">Trendler</span>
                                </button>
                            </nav>
                        </div>

                            {/* Search Bar */}
                            <div className="relative ">
                                <Search size={20}
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                                <input
                                    type="text"
                                    placeholder="Ara..."
                                    className="pl-10 pr-4 py-2 bg-gray-100 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 lg:w-64"
                                />
                            </div>

                            {/* Action Buttons */}
                            <button className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                                <Bell size={20} />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
                            </button>

                            <button className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                                <Mail size={20} />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">7</span>
                            </button>

                            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                                <User size={20} />
                            </button>

                    </div>
                </div>
            </header>

            <div className="w-full px-4 py-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Sol Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
                                <div className="flex items-center space-x-3 mb-6">
                                    <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face"
                                    alt="Profil"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Sen</h3>
                                        <p className="text-sm text-gray-500">@sen</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Takipçi</span>
                                        <span className="font-semibold">1.2K</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Takip</span>
                                        <span className="font-semibold">892</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Postlar</span>
                                        <span className="font-semibold">156</span>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors w-full">
                                        <Settings size={18} />
                                        <span>Ayarlar</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Ana İçerik */}
                        <div className="col-span-2">
                            <PostList />
                        </div>

                        {/* Sağ Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
                                <h3 className="font-semibold text-gray-900 mb-4">Trend Konular</h3>
                                <div className="space-y-3">
                                    <div className="cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                        <p className="font-medium text-gray-900">#ReactJS</p>
                                        <p className="text-sm text-gray-500">12.5K tweet</p>
                                    </div>
                                    <div className="cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                        <p className="font-medium text-gray-900">#Teknoloji</p>
                                        <p className="text-sm text-gray-500">8.2K tweet</p>
                                    </div>
                                    <div className="cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                        <p className="font-medium text-gray-900">#İstanbul</p>
                                        <p className="text-sm text-gray-500">5.7K tweet</p>
                                    </div>
                                    <div className="cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                        <p className="font-medium text-gray-900">#Yazılım</p>
                                        <p className="text-sm text-gray-500">4.1K tweet</p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h3 className="font-semibold text-gray-900 mb-4">Önerilen Kişiler</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                                                    alt="Kullanıcı"
                                                    className="w-8 h-8 rounded-full object-cover"
                                                />
                                                <div>
                                                    <p className="font-medium text-sm">Ayşe Demir</p>
                                                    <p className="text-xs text-gray-500">@aysedemir</p>
                                                    </div>
                                            </div>
                                            <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs hover:bg-blue-600 transition-colors">
                                                Takip Et
                                            </button>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
                                                    alt="Kullanıcı"
                                                    className="w-8 h-8 rounded-full object-cover"
                                                />
                                                <div>
                                                    <p className="font-medium text-sm">Can Yılmaz</p>
                                                    <p className="text-xs text-gray-500">@canyilmaz</p>
                                                </div>
                                            </div>
                                            <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs hover:bg-blue-600 transition-colors">
                                                Takip Et
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaPlatform;