"use client";

import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectsSection() {
    const projects = [
        {
            title: "ITDA 잇다",
            description: [
                "일상에 쉼을, 재능에 가치를, 사람에 철학을 잇다",
                <br />,
                "멘토-멘티 재능나눔 중개 플랫폼",
            ],

            image: "/itda/main.png",
            technologies: [
                "React",
                "Spring Boot",
                "AWS S3/EC2/RDS",
                "구글 API",
                "카카오 API",
            ],
            github: "#",
            live: "#",
            featured: true,
        },
        {
            title: "Youth Booth",
            description: [
                "EXPO 출품작",
                <br />,
                "나의 청춘을 기록하는 포토부스",
            ],
            image: "/Youth/Main.png",
            technologies: ["React", "Python", "AWS S3/EC2"],
            github: "#",
            live: "#",
            featured: true,
        },
        {
            title: "쉬운LED",
            description:
                "핸드폰 사용이 어려운 당신에게, 노년층을 위한 쉬운 LED ",
            image: "/easyLED/스토어 등록 그래픽이미지.png",
            technologies: ["Flutter"],
            github: "#",
            live: "#",
            featured: false,
        },
        {
            title: "산책할개",
            description: "소중한 댕댕이에게 미세먼지 없고 화창한 산책은 필수! ",
            image: "walkingDog/스플래쉬 화면2.png",
            technologies: [
                "React",
                "Spring Boot",
                "공공데이터 API",
                "MySQL",
                "카카오맵 API",
            ],
            github: "#",
            live: "#",
            featured: false,
        },
        {
            title: "급똥지도",
            description: "화장실이 급한 그때 급똥지도",
            image: "/emergencyToilet/1.png",
            technologies: [
                "React",
                "springBoot",
                "공공데이터 API",
                "MySQL",
                "카카오맵 API",
            ],
            github: "#",
            live: "#",
            featured: false,
        },
    ];

    const featuredProjects = projects.filter((p) => p.featured);
    const otherProjects = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 font-bold">
                        My Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                        다양한 웹 애플리케이션을 제작하기 위해 <br /> React,
                        JavaScript, Spring Boot, Python으로 만든 프로젝트입니다.
                    </p>
                </motion.div>

                {/* Projects */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Card className="group bg-white border-gray-200 overflow-hidden hover:border-blue-300 transition-all duration-500 shadow-sm hover:shadow-md">
                                <div className="relative overflow-hidden">
                                    <ImageWithFallback
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
                                    <div className="absolute top-4 right-4 flex space-x-2">
                                        <motion.a
                                            href={project.github}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
                                        >
                                            <Github className="w-5 h-5" />
                                        </motion.a>
                                        <motion.a
                                            href={project.live}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </motion.a>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 font-semibold">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Other Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h3 className="text-2xl text-gray-900 text-center mb-8 font-semibold">
                        Other Projects
                    </h3>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Card className="group bg-gray-50 border-gray-200 hover:border-blue-300 transition-all duration-300 h-full shadow-sm hover:shadow-md">
                                <div className="relative overflow-hidden">
                                    <ImageWithFallback
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10"></div>
                                    <div className="absolute top-3 right-3 flex space-x-2">
                                        <a
                                            href={project.github}
                                            className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                        <a
                                            href={project.live}
                                            className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h4 className="text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 font-semibold">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {project.technologies
                                            .slice(0, 3)
                                            .map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 bg-white text-gray-600 rounded text-xs border border-gray-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Button
                        variant="outline"
                        className="border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-3"
                    >
                        View All Projects
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
