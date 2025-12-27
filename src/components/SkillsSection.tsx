import CyberCard from './CyberCard';
import SkillBar from './SkillBar';
import { Code, Database, Languages, Lightbulb } from 'lucide-react';

const technicalSkills = [
  { name: 'Excel & VBA', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'SQL & Databases', level: 75 },
  { name: 'Microsoft Office', level: 95 },
  { name: 'Linux (Ubuntu)', level: 70 },
  { name: 'PowerPoint & Data Viz', level: 85 },
];

const softSkills = [
  'Rápido Aprendizado',
  'Resolução de Problemas',
  'Pensamento Analítico',
  'Comunicação Assertiva',
  'Organização',
  'Trabalho em Equipe',
];

const languages = [
  { name: 'Português', level: 'Nativo', flag: '🇧🇷' },
  { name: 'Inglês', level: 'B2 - Intermediário', flag: '🇺🇸' },
  { name: 'Espanhol', level: 'B1 - Intermediário', flag: '🇪🇸' },
];

const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 border border-primary/50 rounded-full text-primary font-mono text-sm tracking-wider mb-4">
            ARSENAL
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Habilidades & <span className="text-gradient-cyber">Competências</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <CyberCard glowColor="cyan" className="h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/50">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">Skills Técnicas</h3>
            </div>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'purple' : 'green'}
                  delay={index * 150}
                />
              ))}
            </div>
          </CyberCard>

          {/* Soft Skills & Languages */}
          <div className="space-y-8">
            <CyberCard glowColor="green">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center border border-accent/50">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-semibold text-sm hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CyberCard>

            <CyberCard glowColor="purple">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center border border-secondary/50">
                  <Languages className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">Idiomas</h3>
              </div>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-muted">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="font-semibold text-foreground">{lang.name}</span>
                    </div>
                    <span className="text-secondary font-mono text-sm">{lang.level}</span>
                  </div>
                ))}
              </div>
            </CyberCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
