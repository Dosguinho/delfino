import CyberCard from './CyberCard';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Marvão Serviços de Transporte Escolar',
    role: 'Jovem Aprendiz Administrativo',
    period: 'Atualmente',
    current: true,
    tasks: [
      'Uso da Aplicação Excel para o sistema interno, utilizando funções (VBA)',
      'Gerenciamento e tratamento de planilhas e relatórios',
      'Desenvolvimento de gráficos e relatórios visuais em Python para PowerPoint',
      'Organização e digitalização de documentos veiculares (CRLV, RENAVAM)',
      'Suporte às atividades de monitoramento da frota',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 border border-secondary/50 rounded-full text-secondary font-mono text-sm tracking-wider mb-4">
            TRAJETÓRIA
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Experiência <span className="text-gradient-cyber">Profissional</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <CyberCard key={index} glowColor="purple" className="mb-8">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center border border-secondary/50">
                    <Briefcase className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-foreground">{exp.role}</h3>
                      <p className="text-secondary font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className={`font-mono text-sm ${exp.current ? 'text-accent' : 'text-muted-foreground'}`}>
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/50 animate-pulse">
                          ATIVO
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CyberCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
