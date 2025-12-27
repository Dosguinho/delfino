import CyberCard from './CyberCard';
import { Award, GraduationCap, Rocket, Trophy } from 'lucide-react';

const certifications = [
  {
    title: 'Google IT Support',
    institution: 'Google + CiEE',
    year: '2023',
    icon: Award,
    description: 'Certificação Profissional em Suporte TI, fundamentos de redes e bancos de dados',
    color: 'cyan' as const,
  },
  {
    title: 'Técnico em Administração',
    institution: 'CETI Chagas Rodrigues',
    year: 'Em curso',
    icon: GraduationCap,
    description: 'Formação técnica integrada ao ensino médio em Administração Geral',
    color: 'purple' as const,
  },
  {
    title: 'Administrativo',
    institution: 'SEST SENAT',
    year: 'Previsão: Fev/2026',
    icon: Award,
    description: '1000 horas - Atendimento ao público, comunicação interpessoal e gestão administrativa',
    color: 'green' as const,
  },
];

const achievements = [
  {
    title: 'Liga Jovem Sebrae',
    subtitle: 'Classificado Etapa Nacional 2025',
    description: 'Idealizei e desenvolvi um aplicativo móvel focado em sustentabilidade',
    icon: Trophy,
  },
  {
    title: 'Data Analytics',
    subtitle: 'Capstone Project',
    description: 'Tratamento de banco de dados com SQL e uso de OS Linux',
    icon: Rocket,
  },
];

const CertificationsSection = () => {
  return (
    <section id="certificacoes" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 border border-accent/50 rounded-full text-accent font-mono text-sm tracking-wider mb-4">
            CONQUISTAS
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Certificações & <span className="text-gradient-cyber">Formação</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {certifications.map((cert, index) => (
            <CyberCard key={index} glowColor={cert.color} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center border ${
                cert.color === 'cyan' ? 'bg-primary/20 border-primary/50' :
                cert.color === 'purple' ? 'bg-secondary/20 border-secondary/50' :
                'bg-accent/20 border-accent/50'
              }`}>
                <cert.icon className={`w-8 h-8 ${
                  cert.color === 'cyan' ? 'text-primary' :
                  cert.color === 'purple' ? 'text-secondary' :
                  'text-accent'
                }`} />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">{cert.title}</h3>
              <p className={`font-semibold mb-1 ${
                cert.color === 'cyan' ? 'text-primary' :
                cert.color === 'purple' ? 'text-secondary' :
                'text-accent'
              }`}>{cert.institution}</p>
              <p className="text-muted-foreground font-mono text-sm mb-4">{cert.year}</p>
              <p className="text-muted-foreground text-sm">{cert.description}</p>
            </CyberCard>
          ))}
        </div>

        {/* Achievements */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-display font-bold text-center text-foreground mb-8">
            🏆 Destaques
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <CyberCard key={index} glowColor="cyan" hover3D={false} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/50 flex-shrink-0">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-bold text-foreground">{achievement.title}</h4>
                    <p className="text-primary font-semibold text-sm mb-2">{achievement.subtitle}</p>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </div>
                </div>
              </CyberCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
