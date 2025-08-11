import React, { useState } from 'react';
import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal, Plus, Search, Bell, Mail, User, Home, TrendingUp, Settings } from 'lucide-react';
import UserList from './UserList';
import PostList from './PostList';
import SearchAppBar from './SearchAppBar';

const SocialMediaPlatform = () => {
    const [activeTab, setActiveTab] = useState('home');





    return (
        <div className="min-h-screen bg-gray-50 w-full">
            {/* Material-UI Search App Bar */}
            <SearchAppBar activeTab={activeTab} setActiveTab={setActiveTab} />

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