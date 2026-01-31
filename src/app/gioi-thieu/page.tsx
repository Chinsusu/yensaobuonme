import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Giới thiệu',
    description: 'Yến Sào Hòn Nội - Chuyên cung cấp yến sào cao cấp 100% nguyên chất từ Khánh Hòa',
};

export default function AboutPage() {
    return (
        <div className="bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Về chúng tôi</h1>
                    <p className="text-amber-100 max-w-2xl mx-auto">
                        Yến Sào Hòn Nội - Tinh hoa từ thiên nhiên, chất lượng vượt trội
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Câu chuyện của chúng tôi</h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Yến Sào Hòn Nội được thành lập từ năm 2010, xuất phát từ niềm đam mê và mong muốn
                                    mang đến những sản phẩm yến sào chất lượng cao nhất cho người tiêu dùng Việt Nam.
                                </p>
                                <p>
                                    Chúng tôi tự hào là đơn vị tiên phong trong việc khai thác và chế biến yến sào
                                    tại vùng biển Khánh Hòa - nơi được mệnh danh là &quot;thủ phủ yến sào&quot; của Việt Nam.
                                </p>
                                <p>
                                    Với hơn 15 năm kinh nghiệm, chúng tôi cam kết mang đến những sản phẩm yến sào
                                    100% nguyên chất, không pha trộn, được thu hoạch và chế biến theo quy trình
                                    khép kín, đảm bảo an toàn vệ sinh thực phẩm.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center">
                            <div className="text-center">
                                <span className="text-8xl">🥚</span>
                                <p className="text-amber-600 font-semibold mt-4">Since 2010</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Giá trị cốt lõi</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '🏆',
                                title: 'Chất lượng hàng đầu',
                                desc: 'Cam kết 100% yến sào nguyên chất, không pha trộn, đạt tiêu chuẩn an toàn vệ sinh thực phẩm',
                            },
                            {
                                icon: '🔬',
                                title: 'Minh bạch nguồn gốc',
                                desc: 'Mỗi sản phẩm đều có mã truy xuất nguồn gốc, giúp khách hàng yên tâm về xuất xứ',
                            },
                            {
                                icon: '💚',
                                title: 'Bền vững môi trường',
                                desc: 'Khai thác có trách nhiệm, bảo tồn và phát triển bền vững nguồn tài nguyên yến sào',
                            },
                        ].map((item) => (
                            <div key={item.title} className="text-center p-8 bg-gray-50 rounded-2xl">
                                <div className="w-20 h-20 mx-auto bg-amber-100 rounded-full flex items-center justify-center text-4xl mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: '15+', label: 'Năm kinh nghiệm' },
                            { value: '10,000+', label: 'Khách hàng tin tưởng' },
                            { value: '50+', label: 'Sản phẩm đa dạng' },
                            { value: '100%', label: 'Hài lòng' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                                <p className="text-amber-100">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Đội ngũ của chúng tôi</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        Đội ngũ chuyên gia giàu kinh nghiệm, tận tâm với chất lượng sản phẩm
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { name: 'Nguyễn Văn A', role: 'Giám đốc', emoji: '👨‍💼' },
                            { name: 'Trần Thị B', role: 'Quản lý sản xuất', emoji: '👩‍🔬' },
                            { name: 'Lê Văn C', role: 'Chuyên gia chất lượng', emoji: '👨‍🔬' },
                        ].map((person) => (
                            <div key={person.name} className="bg-white rounded-2xl p-6 shadow-sm">
                                <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-5xl mb-4">
                                    {person.emoji}
                                </div>
                                <h3 className="font-semibold text-gray-800">{person.name}</h3>
                                <p className="text-amber-600 text-sm">{person.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
