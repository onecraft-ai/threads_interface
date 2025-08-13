"use client";

import { useState, useEffect } from 'react';
import { Download, Share2, Monitor } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { WindowsIcon, MacOSIcon, LinuxIcon, UnknownOSIcon } from './os-icons';

interface ReleaseAsset {
  id: number;
  name: string;
  browser_download_url: string;
  size: number;
  download_count: number;
}

interface Release {
  version: string;
  name: string;
  publishedAt: string;
  assets: ReleaseAsset[];
}

export function DownloadSection() {
  const { language } = useLanguage();
  const [release, setRelease] = useState<Release | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userOS, setUserOS] = useState<'windows' | 'macos' | 'linux' | 'unknown'>('unknown');

  useEffect(() => {
    fetchLatestRelease();
    detectUserOS();
  }, []);

  const detectUserOS = () => {
    if (typeof window === 'undefined') return;
    
    const userAgent = window.navigator.userAgent.toLowerCase();
    const platform = window.navigator.platform.toLowerCase();
    
    if (userAgent.includes('win') || platform.includes('win')) {
      setUserOS('windows');
    } else if (userAgent.includes('mac') || platform.includes('mac')) {
      setUserOS('macos');
    } else if (userAgent.includes('linux') || platform.includes('linux')) {
      setUserOS('linux');
    } else {
      setUserOS('unknown');
    }
  };

  const fetchLatestRelease = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/releases');
      
      if (!response.ok) {
        throw new Error('Failed to fetch releases');
      }
      
      const data = await response.json();
      setRelease(data);
    } catch (err) {
      console.error('Failed to fetch releases:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const getPlatformInfo = (filename: string) => {
    const name = filename.toLowerCase();
    
    if (name.endsWith('.exe')) {
      return {
        platform: 'Windows',
        osType: 'windows' as const,
        icon: WindowsIcon,
        color: 'blue'
      };
    }
    
    if (name.endsWith('.dmg')) {
      return {
        platform: 'macOS',
        osType: 'macos' as const,
        icon: MacOSIcon,
        color: 'gray'
      };
    }
    
    if (name.endsWith('.rpm') || (name.endsWith('.zip') && name.includes('linux'))) {
      return {
        platform: name.endsWith('.rpm') ? 'Linux' : 'Linux (Portable)',
        osType: 'linux' as const,
        icon: LinuxIcon,
        color: 'orange'
      };
    }
    
    if (name.endsWith('.zip') && (name.includes('darwin') || name.includes('mac'))) {
      return {
        platform: 'macOS (Portable)',
        osType: 'macos' as const,
        icon: MacOSIcon,
        color: 'gray'
      };
    }
    
    return {
      platform: 'Unknown',
      osType: 'unknown' as const,
      icon: UnknownOSIcon,
      color: 'purple'
    };
  };

  const formatFileSize = (bytes: number) => {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)} MB`;
  };
  return (
    <section id="download" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Mobile-only block */}
        <div className="block md:hidden text-center">
          <div className="mb-6">
            <Monitor className="w-16 h-16 mx-auto text-white/70 filter drop-shadow-lg" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {language === 'ru' ? 'Это десктопное приложение' : 'This is a desktop app'}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-6">
            {language === 'ru'
              ? 'Откройте эту страницу на компьютере, чтобы скачать приложение. Или отправьте себе ссылку:'
              : 'Open this page on your computer to download the app. Or send the link to yourself:'}
          </p>
          <button
            type="button"
            onClick={async () => {
              try {
                if (!('share' in navigator)) {
                  console.error('Web Share API is not supported in this browser.');
                  return;
                }
                await navigator.share({
                  title: 'Threads Helper',
                  text: language === 'ru' ? 'Ссылка на десктопное приложение Threads Helper' : 'Link to the Threads Helper desktop app',
                  url: 'https://threadshelper.com',
                });
              } catch (err) {
                console.error('Share failed:', err);
              }
            }}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <Share2 className="w-5 h-5 mr-3" />
            <span>{language === 'ru' ? 'Отправить ссылку на мой компьютер' : 'Send link to my computer'}</span>
          </button>
          <div className="mt-4 text-white/60 text-sm">
            {language === 'ru' ? 'Доступно для Windows, macOS и Linux' : 'Available for Windows, macOS and Linux'}
          </div>
        </div>

        {/* Desktop-only block */}
        <div className="hidden md:block">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'ru' ? 'Скачать приложение' : 'Download App'}
            </h2>
            {(!error && release) && (
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-4">
                {language === 'ru'
                  ? `Версия ${release.version} — настольное приложение для работы с Threads`
                  : `Version ${release.version} — desktop application for Threads`}
              </p>
            )}
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-green-400 font-medium text-sm">
                {language === 'ru'
                  ? 'Попробуйте абсолютно бесплатно — приветственные токены начисляем!'
                  : 'Try absolutely free — welcome tokens included!'}
              </span>
            </div>
          </div>

          {/* Desktop states: loading / error / content */}
          {loading && (
            <div className="max-w-4xl mx-auto text-center">
              <div className="h-8 bg-white/10 rounded-lg mb-4 animate-pulse"></div>
              <div className="h-4 bg-white/5 rounded mb-8 animate-pulse"></div>
              <div className="h-64 bg-white/5 rounded-2xl mb-8 animate-pulse"></div>
              <div className="flex justify-center gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-32 h-32 bg-white/5 rounded-xl animate-pulse"></div>
                ))}
              </div>
            </div>
          )}

          {(!loading && (error || !release)) && (
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-4">⚠️</div>
              <p className="text-xl text-white/80 mb-6">
                {language === 'ru' ? 'Не удалось загрузить релизы' : 'Failed to load releases'}
              </p>
              <button
                onClick={fetchLatestRelease}
                className="px-6 py-3 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors"
              >
                {language === 'ru' ? 'Попробовать снова' : 'Try Again'}
              </button>
            </div>
          )}

          {(!loading && !error && release) && (() => {
            const assetsWithPlatformInfo = release.assets.map(asset => ({
              ...asset,
              platformInfo: getPlatformInfo(asset.name)
            }));
            const primaryAsset = assetsWithPlatformInfo.find(asset => asset.platformInfo.osType === userOS) || assetsWithPlatformInfo[0];
            const otherAssets = assetsWithPlatformInfo.filter(asset => asset.id !== primaryAsset.id);

            return (
              <>
                {/* Primary download card */}
                <div className="mb-12">
                  <a
                    href={primaryAsset.browser_download_url}
                    className="group block p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-center">
                      <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                        <primaryAsset.platformInfo.icon className="w-20 h-20 mx-auto filter drop-shadow-lg" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {primaryAsset.platformInfo.platform}
                      </h3>
                      <p className="text-white/60 mb-6">
                        {formatFileSize(primaryAsset.size)}
                      </p>
                      <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full group-hover:shadow-lg transition-all">
                        <Download className="w-5 h-5" />
                        <span>{language === 'ru' ? 'Скачать' : 'Download'}</span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Other platforms */}
                {otherAssets.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white text-center mb-6">
                      {language === 'ru' ? 'Другие платформы' : 'Other Platforms'}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {otherAssets.map((asset) => (
                        <a
                          key={asset.id}
                          href={asset.browser_download_url}
                          className="group p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="text-center">
                            <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                              <asset.platformInfo.icon className="w-12 h-12 mx-auto filter drop-shadow-md" />
                            </div>
                            <h4 className="font-medium text-white mb-1">
                              {asset.platformInfo.platform}
                            </h4>
                            <p className="text-sm text-white/60">
                              {formatFileSize(asset.size)}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </>
            );
          })()}
        </div>
      </div>
    </section>
  );
} 