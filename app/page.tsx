import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Chart } from './components/Chart'

export default function LandingPage () {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full border-2 border-black bg-white flex items-center justify-between px-6 py-4 shadow-[4px_4px_0_0_#000]">
        <div className="flex items-center gap-3">
          <Image src="/assets/icons/logo-brand.svg" alt="Cloudora Logo" width={40} height={40} />
          <span className="font-bold text-xl font-mono tracking-wider">CLOUDORA</span>
        </div>
        <div className="flex gap-4">
          <Link href="/sign-up">
            <Button size="lg" className="primary-btn">Get Started</Button>
          </Link>
          <Link href="/sign-in">
            <Button size="lg" variant="outline" className="border-2 border-black hover:bg-gray-100">Sign In</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <Image src="/assets/icons/logo-full.svg" alt="Cloudora Logo" width={200} height={80} className="w-[160px] lg:w-[200px]" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Effortless Cloud Storage
              <span className="block text-blue-600">for Everyone</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Securely store, organize, and share your files with Cloudora. Simple, fast, and reliable cloud storage for individuals and teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/sign-up">
                <Button size="lg" className="primary-btn text-lg px-8 py-4 h-14">
                  Start Uploading
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-14 border-2 border-black hover:bg-gray-100">
                  Try Demo
                </Button>
              </Link>
            </div>

            {/* File type icons */}
            <div className="flex justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                <Image src="/assets/icons/file-image.svg" alt="Image" width={24} height={24} />
                <span className="text-sm font-medium text-gray-700">Images</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                <Image src="/assets/icons/file-pdf.svg" alt="PDF" width={24} height={24} />
                <span className="text-sm font-medium text-gray-700">Documents</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                <Image src="/assets/icons/file-video.svg" alt="Video" width={24} height={24} />
                <span className="text-sm font-medium text-gray-700">Videos</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                <Image src="/assets/icons/file-other.svg" alt="Other" width={24} height={24} />
                <span className="text-sm font-medium text-gray-700">More</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-pixel-blue-light py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Cloudora?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '/assets/icons/upload.svg',
                title: 'Easy Uploads',
                desc: 'Drag and drop files or use our intuitive uploader with instant preview.',
                color: 'bg-purple-50 border-purple-200'
              },
              {
                icon: '/assets/icons/share.svg',
                title: 'Secure Sharing',
                desc: 'Share files and folders with full control over permissions and access.',
                color: 'bg-purple-50 border-purple-200'
              },
              {
                icon: '/assets/icons/lock.svg',
                title: 'Privacy First',
                desc: 'Your files are encrypted and protected with enterprise-grade security.',
                color: 'bg-purple-50 border-purple-200'
              },
              {
                icon: '/assets/icons/file-document.svg',
                title: 'Instant Previews',
                desc: 'Preview documents, images, and videos instantly without downloading.',
                color: 'bg-purple-50 border-purple-200'
              }
            ].map((feature, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${feature.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm mb-4">
                  <Image src={feature.icon} alt={feature.title} width={24} height={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Visualization Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0_0_#000] p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="w-100 h-64 lg:w-100 lg:h-80">
                  <Chart used={800 * 1024 * 1024} total={2 * 1024 * 1024 * 1024} />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Visualize Your Storage</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Instantly see how much space you&apos;ve used and what&apos;s available. Cloudora makes it easy to manage your files and keep track of your storage with beautiful, intuitive visualizations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600">2GB</div>
                    <div className="text-sm text-gray-600">Free Storage</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-600">Unlimited</div>
                    <div className="text-sm text-gray-600">File Types</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* File Management Preview */}
      <section className="bg-pixel-blue-light py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Organize Your Files</h2>
          <div className="bg-gray-50 rounded-2xl border-2 border-black shadow-[4px_4px_0_0_#000] p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'DOCUMENT.PDF', icon: '/assets/icons/file-document.svg', type: 'PDF Document' },
                { name: 'PHOTO.JPG', icon: '/assets/icons/file-image.svg', type: 'Image File' },
                { name: 'VIDEO.MP4', icon: '/assets/icons/file-video.svg', type: 'Video File' }
              ].map((file, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl border-2 border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg shadow-sm flex items-center justify-center mb-4">
                    <Image src={file.icon} alt={file.name} width={32} height={32} />
                  </div>
                  <span className="font-mono text-sm text-gray-700 mb-1">{file.name}</span>
                  <span className="text-xs text-gray-500">{file.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Why Cloudora?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cloudora is designed for simplicity and security. Whether you are storing personal memories or collaborating with your team, Cloudora keeps your files safe, organized, and always accessible.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">End-to-end encryption</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Real-time collaboration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Cross-platform sync</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image src="/assets/images/files.png" alt="About Cloudora" width={400} height={400} className="rounded-2xl shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue py-16">
        <div className="container mx-auto px-6">
          <div className="bg-pixel-blue-light rounded-2xl border-2 border-black shadow-[4px_4px_0_0_#000] p-12 text-center text-white">
            <h2 className="text-3xl text-slate-900 font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl mb-8 text-slate-900 opacity-90">Join users who trust Cloudora for their file storage needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-up">
                <Button size="lg" className="bg-black text-blue-600 hover:bg-white hover:text-black text-lg px-8 py-4 h-14 font-semibold">
                  Create your free account
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button size="lg" className="bg-pixel-blue-dark text-blue-600 hover:bg-white hover:text-black text-lg px-8 py-4 h-14 font-semibold">
                  Sign in to existing account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image src="/assets/icons/logo-brand.svg" alt="Cloudora Logo" width={32} height={32} />
            <span className="font-bold text-xl font-mono">CLOUDORA</span>
          </div>
          <p className="text-gray-400 mb-4">Secure cloud storage for everyone</p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Support</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
