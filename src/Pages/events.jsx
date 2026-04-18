import React, { useState, useEffect, useRef, useCallback } from 'react';
import "../Styles/event.css"
import { Link } from "react-router-dom";



// ─── EVENT DATA ───────────────────────────────────────────────────────────────
const DAYS = {
  1: {
    label: 'DAY 01',
    subtitle: 'IGNITION PROTOCOL',
    color: '#00d4ff',
    glow: 'rgba(0,212,255,0.4)',
    events: [
      {
        id: 'd1e1',
        name: 'CODE RELAY ',
        tagline: 'Code Relay is a high-speed, collaborative programming challenge where teams must solve complex problems through a series of "blind" handoffs, testing code comprehension and adaptability under pressure.',
        category: 'CSE',
        team:'Team of 4',
        venue: 'Main Building, Computer Lab 3 & 4',
       
        
        color: '#ff3a5e',
        accent: 'rgba(255,58,94,0.15)',
        image: 'code_relay',
        description:
          'Code Relay is an intense test of a teams ability to maintain logic and momentum without verbal communication. Teams are tasked with solving a difficult problem statement, but there is a significant twist: only one member codes at a time. Every 10 minutes, the active programmer is swapped out, and the next teammate must take over. The incoming member will have no prior knowledge of the specific logic or variables their teammate was using and must quickly analyze the existing code to continue building toward a functional solution.',
        rules: [
         '●	Team Structure: Teams must consist of a fixed number of participants, typically 3 to 4 members per team.',
         '●	The Swap: Participants will switch stations strictly every 10 minutes upon a designated signal or buzzer.',
         '●	No Communication: There is a strict zero-communication policy during the swap; teammates cannot discuss the problem statement, logic, or code structure.',
         '●	Code Continuity: The incoming member must read the code left by the previous member to understand the flow before continuing the work.',
         '●	Code Modification: Members are allowed to modify or delete previous code if they believe it is incorrect, though this consumes the teams allotted time.',
         '●	Evaluation: Teams are judged based on the final code’s functionality, its ability to pass hidden test cases, and completion within the total time limit. ',
         
        ],
      },
      {
        id: 'd1e2',
        name: 'ESCAPE THE ROOM ',
        tagline: 'Description Escape the Room is an immersive, solo puzzle-based challenge that tasks participants with decoding high-stakes clues and logical riddles to "escape" a secured environment within a strict time limit.',
        category: 'CSE',
       
        venue: 'Main Building, Computer Lab 3 & 4',
        team:'solo',
        icon: '💻',
        color: '#00d4ff',
        accent: 'rgba(0,212,255,0.15)',
        image: 'escape',
        description:
          '',
        rules: [
          '● Objective: Participants are trapped in a secured environment and must decode clues and solve puzzles to escape before the timer expires.',
          '● Participation Mode: This is strictly a SOLO event.',
          '● Time Constraint: Every second counts; participants have a limited amount of time to think fast and act smart.',
          '● No External Support: Mobile devices and all forms of communication with the outside world or external assistance are strictly forbidden.',
          '● Sequential Progression: The challenge is designed in layers; puzzles must be solved in the correct sequence to progress through the system.',
          '● Observation and Care: Every detail or symbol could be a clue. Participants must handle all objects with care, as intelligence—not force—is required to solve the tasks.',
          '● Disqualification: Any attempts to cheat, skip steps, damage objects, or break rules will result in immediate mission termination.',
          '● Authority: All decisions made by the event coordinators are final and cannot be challenged.',
        ],
      },
      {
        id: 'd1e3',
        name: 'INCEPTION-X',
        tagline: 'Inception-X is a premier startup ideation stage where aspiring entrepreneurs pitch AI-driven business solutions, focusing on market strategy, innovation, and technical viability rather than live coding.',
        category: 'CSE',
        
        venue: 'Main Building, G8, ',
        team:'Team of 2 to 4',
        icon: '',
        color: '#7b2fff',
        accent: 'rgba(123,47,255,0.15)',
        image: 'inception',
        description:
          'This competition serves as a platform for visionary thinkers to showcase their business acumen by identifying real-world market gaps and proposing scalable AI solutions. Participants focus entirely on product formulation and strategy, pitching comprehensive ideas—ranging from AI-powered educational platforms to intelligent healthcare assistants. It is a true test of a teams ability to design a technically sound product that balances cutting-edge innovation with a sustainable revenue model and clear market impact.',
      rules: [
          '●	The Pitch: Teams are allotted exactly 7 minutes for a slide deck presentation, followed by a 3-minute Q&A session with the judging panel.',
          '●	Core Requirement: The proposed solution must prominently feature Artificial Intelligence (e.g., Machine Learning, LLMs, Computer Vision) as a core functional component, not merely as a buzzword.',
          '●	Deliverables: Presentations must include a problem statement, AI-based solution, target audience analysis, revenue model, and a brief technical architecture overview.',
          '●	Visuals: While a working prototype is not required, teams are highly encouraged to include clear wireframes or high-fidelity mockups to demonstrate their vision.',
          '●	Originality: All ideas must be original; plagiarizing existing startups without a significant, innovative pivot will lead to immediate disqualification.',
          '●	Evaluation Criteria: Scoring is based on innovation, market feasibility, technical logic, presentation delivery, and the depth of the proposed AI integration.',
          '',
          '',
        ],
      },
      {
        id: 'd1e4',
        name: 'BATTLEGRID (BGMI)',
        tagline: 'Description BATTLEGRID is a high-intensity mobile e-sports tournament where squads compete in a tactical battle royale format to crown the sharpest survivors of the fest.',
        category: 'CSE',
    
        venue: ': Main Building, lab 2 / Galleries',
        
       
        color: '#ffd700',
        accent: 'rgba(255,215,0,0.15)',
        image: 'bgmi',
        TEAM: 'Team of 4',
        description:
          'BATTLEGRID brings together the universitys best squads for a high-stakes survival challenge. Moving away from technical coding skills, this adrenaline-fueled arena focuses on squad coordination, lightning-fast reflexes, and strategic positioning. Teams must navigate intense combat scenarios, manage resources, and outlast their opponents under pressure. It is a dedicated space for competitive entertainment designed to find the most elite tactical players on the battleground.',
        rules: [
          '●	Team Structure & Eligibility: Each team must consist of exactly 4 players (Squad) with an optional single substitute; players are restricted to participating in only one team.',
          '●	Match Format: Matches are conducted in TPP (Third Person Perspective) via custom rooms, utilizing maps like Erangel for primary rounds and Miramar for the finale.',
          '●	Scoring System: Rankings are determined by a combination of Kill Points (1 point per kill) and Placement Points based on the official scoreboard shared prior to the match.',
          '●	Fair Play: The use of emulators, hacks, mods, or any third-party tools is strictly prohibited and results in immediate disqualification.',
          '●	Match Discipline: Players must provide their own mobile devices and stable internet; all squads must be present in the custom room 10–15 minutes before the start time.',
          '●	Conduct: Teams must maintain sportsmanship at all times; any misconduct will lead to expulsion from the tournament.',
          '●	Authority: The organizers decisions regarding disputes or match results are final and binding for all participants.',
          
        ],
      },

       {
        id: 'd1e5',
        name: 'STRUCTURAL SHOWDOWN / LIFT-EXA ',
        tagline: 'A bridge/structure building challenge where participants design and build the strongest structure using limited materials. Judged on strength, design, and load bearing capacity.',
        category: 'MECHANICAL',
    
        venue: 'New Workshop Lab ',
        
        icon: '',
        color: '#ffd700',
        accent: 'rgba(255,215,0,0.15)',
        image: 'structuralshowdown',
        TEAM: 'Team of 4',
      
        rules: [
          '• Team must build structure within given time ',
          '• .Only provided materials allowed. ',
          '• No pre-made parts allowed. ',
          'Structure will be tested for strength &  load capacity. ',
          '• Judges’ decision will be final.',
          
          
        ],
      },

       {
  id: 'd1e6',
  name: 'ROBO RUSH',
  tagline: 'A robotics challenge where participants control robots to complete obstacles, races, or task-based missions in minimum time.',
  category: 'MECHANICAL',

  venue: 'New Workshop Lab',

  icon: '',
  color: '#ffd700',
  accent: 'rgba(255,215,0,0.15)',
  image: 'roborush',
  TEAM: 'Team of 2–5',

  rules: [
    '• Team must bring or use approved robot.',
    '• Manual or autonomous mode as per rulebook.',
    '• Damaging arena prohibited.',
    '• Time penalties for rule violations.',
    '• Fastest completion wins.',
  ],

 
  
},

{
  id: 'd1e7',
  name: 'LATHECRAFT ARENA',
  tagline: 'A machining skill competition where participants perform lathe operations and produce a precise component based on dimensions.',
  category: 'MECHANICAL',

  venue: 'Manufacturing Lab',

  icon: '',
  color: '#ffd700',
  accent: 'rgba(255,215,0,0.15)',
  image: 'lathecraftarena',
  TEAM: 'Individual',

  rules: [
    '• Safety gear compulsory.',
    '• Only assigned machine allowed.',
    '• Accuracy and finish will be judged.',
    '• Time limit must be followed.',
    '• Unsafe practices lead to disqualification.',
  ],

  details: {
    duration: '2 Hours',
    day: 'Day 1'
  },

  student_incharge_contact: '',
  faculty_incharge_contact: ''
},


{
  id: 'd1e8',
  name: 'Brdge O Mania',
  tagline: 'Step into the world of structural engineering with BRIDGEO-MANIA, an engaging competition that challenges participants to apply their design and analytical skills to real-world engineering problems.',
  category: 'CIVIL',

  venue: 'To Be Announced ',

  icon: '',
  color: '#f0147e',
  accent: 'rgba(242, 34, 239, 0.15)',
  image: 'bridgeomania',
  TEAM: 'Team of 6–8',
  description:'Truss bridges are widely used in civil engineering due to their ability to distribute loads effectively through triangular frameworks. By carefully arranging structural members, engineers can achieve high strength while minimizing material usage. However, designing such structures requires addressing several engineering challenges: Load Distribution: Ensuring that forces are effectively transferred through different structural members.  Structural Stability: Maintaining balance and preventing failure under increasing loads.  Material Efficiency: Optimizing the design to achieve maximum strength with limited resources.  Joint and Member Design: Ensuring connections and members can sustain applied stresses without structural failure. ',

  rules: [
  
  
    'Team Size: Each team must have 3 to 4 members. No changes in team members are allowed after registration. ',
    'Materials: Only materials provided or explicitly approved by the organizers can be used for construction. ',
  ],


},

{
  id: 'd1e9',
  name: 'MAELSTROM',
  tagline: 'A fluid dynamics challenge where participants design a gravity-driven hydraulic track to efficiently transport water while managing flow, turbulence, and energy losses.',
  category: 'CIVIL',

  venue: 'To be Announced',

  icon: '',
  color: '#f0147e',
  accent: 'rgba(242, 34, 239, 0.15)',
  image: 'maelstromm',
  TEAM: 'Team of 3–4',
  description:'In real-world systems such as canals, spillways, and drainage networks, water flow is influenced by channel geometry, bends,loops, and sudden changes in cross-section. These factors often generate turbulence, leading to energy losses and reduced efficiency.Participants must address key hydraulic challenges such as: Controlling flow velocity and optimizing slope Managing turbulence caused by bends, loops, and transitions Reducing frictional and energy losses Designing a continuous and efficient flow track from inlet to outlet The inclusion of elements like spiral loops, sharp bends, and cross sectional variations simulates real hydraulic conditions, requiring participants to design a structured flow path that balances performance with stability',

  rules: [
    '• Team size must be 3 to 4 members. No changes allowed after registration.',
    '• Only materials provided or approved by organizers can be used.',
    '• Teams must design a gravity-driven hydraulic track from reservoir to outlet.',
    '• System must manage flow velocity, turbulence, and energy losses.',
    '• Sharp bends, loops, and cross-sections may be included as per design.',
    '• Judged on efficiency, design innovation, and volume/time performance.',
  ],


}













    ],
  },
  2: {
    label: 'DAY 02',
    subtitle: 'ORBITAL ASCENT',
    color: '#ff6b35',
    glow: 'rgba(255,107,53,0.4)',
    events: [
      {
        id: 'd2e1',
        name: 'VIBE CODING',
        tagline: 'Vibe Coding is a rapid-development challenge where participants act as product directors, using state-of-the-art AI IDEs and prompt engineering to build functional products in a high-speed sprint.',
        category: 'CSE',
       
        venue: 'Main Building, Computer Lab 3 & 4 ',
        team:'Team of 2 to 4',
        icon: '🧠',
        color: '#00ff9f',
        accent: 'rgba(0,255,159,0.15)',
        image: 'vibecoding',
        description:
          'Vibe Coding shifts the focus from manual syntax to high-level orchestration and AI collaboration. In this intense 4-hour window, participants are given a surprise real-world theme and must build a fully functional, usable product—not just a backend service. By leveraging powerful AI code generators and IDEs like Cursor, v0, or GitHub Copilot Workspace, teams must "vibe code" their way through architecture, logic, and UI/UX. While manual coding is permitted for fine-tuning, the tight deadline ensures that success belongs to those who can most effectively prompt and direct AI to handle the heavy lifting of development and debugging.',
        rules: [
         '●	Development Approach: Participants must primarily use AI-assisted tools and prompt engineering to generate their codebase and build a complete product from scratch.',
         '●	The Theme: A specific, real-world problem or surprise theme will be revealed only at the start of the timer, and all products must directly address it.',
         '●	Time Limit: The entire development phase is strictly limited to 4 hours.',
         '●	Manual Coding Limit: Manual coding is allowed for minor bug fixes or connecting components, but it is insufficient to complete the project without AI assistance.',
         '●	Originality & Tooling: Participants are encouraged to use the latest AI IDEs (e.g., Cursor, Lovable, v0) but must ensure the final product logic is their own directed vision.',
         '●	Evaluation Criteria: Projects will be judged on product utility, completeness, UI/UX, and the effectiveness of the AI prompting strategy used during the sprint.',
         '●	Presentation: Each team will have 3 minutes at the conclusion of the event to demonstrate their working product and explain their AI orchestration process.',
        
        ],
      },
      {
        id: 'd2e2',
        name: 'CASEGON',
        tagline: 'CASEGON is a high-energy, on-the-spot AI and tech case study competition where participants solve real-world problems live at the venue to simulate industry-level decision-making.',
        category: 'CSE',
        
        venue: ': Main Building, G8 ',
        team: 'Team of 2 to 3',
        icon: '⚙️',
        color: '#ff6b35',
        accent: 'rgba(255,107,53,0.15)',
        image: 'casegon',
        description:
          'This event is designed to test much more than just a good idea; it challenges teams on their speed, clarity, teamwork, and execution under significant pressure. Participants tackle complex problem statements across diverse domains such as AI & Machine Learning, FinTech, and Healthcare Systems. The goal is to encourage AI-driven innovation as teams move rapidly from initial problem analysis to a structured solution or prototype.',
        rules: [
          '● Team Structure: Teams must consist of 2 to 3 members, and cross-branch collaboration is explicitly allowed to foster diverse perspectives.',
          '● Event Flow: The competition consists of three live rounds: a 60-minute Case Sprint (Round 1), a 90-minute Deep Dive Challenge (Round 2) for shortlisted teams, and a Grand Finale Live Pitch.',
          '● Deliverables: Participants must provide structured presentations—3 to 5 slides for Round 1 and 6 to 10 slides for Round 2—covering problem breakdown, root cause analysis, and feasibility.',
          '● Tools & Conduct: Laptops, internet access, and AI tools are permitted; however, original thinking is mandatory, and any plagiarism results in immediate disqualification',
          '● Evaluation Criteria: Teams are judged equally (20% each) on problem understanding, innovation, AI/Tech application, feasibility, and presentation skills.',
          '● Timeline: The event typically runs from morning to evening, starting with Round 1 at 10:00 AM and concluding with results at 4:00 PM',
         
        ],
      },

      
     
       
      {
  id: 'd1e5',
  name: 'CADVerse',
  tagline: 'A CAD designing competition where participants create 2D/3D models using design software based on the given problem statement.',
  category: 'MECHANICAL',

  venue: 'New Computer Lab 3-4',

  icon: '',
  color: '#ffd700',
  accent: 'rgba(255,215,0,0.15)',
  image: 'cadverse',
  team: 'solo',

  rules: [
    '• Only allotted system/software allowed.',
    '• Internet access restricted unless permitted.',
    '• Design must be original.',
    '• Submission within time limit mandatory.',
    '• Judged on creativity and accuracy.',
  ],


 
},



{
  id: 'd1e6',
  name: 'ModelForge X',
  tagline: 'An innovation/model making contest where participants present working or conceptual mechanical models and explain their idea.',
  category: 'MECHANICAL',

  venue: 'New Workshop Lab',

  icon: '',
  color: '#ffd700',
  accent: 'rgba(255,215,0,0.15)',
  image: 'modelforgex',
  team: 'Team of 2–4',

  rules: [
    '• Model must be student-made.',
    '• Ready-made market projects not allowed.',
    '• Presentation time limited.',
    '• Innovation and practicality considered.',
    '• Judges’ decision final.',
  ],

 
},
{
  id: 'd1e7',
  name: 'TUG OF WAR',
  tagline: 'A fun strength and teamwork event where teams compete by pulling the rope to their side.',
  category: 'MECHANICAL',

  venue: 'Workshop Ground',

  icon: '',
  color: '#ffd700',
  accent: 'rgba(255,215,0,0.15)',
  image: 'tugofwar',
  team: 'Team of 6–8',

  rules: [
    '• Equal number of players in each team.',
    '• No gloves/spikes unless allowed.',
    '• Match starts on referee signal.',
    '• Unsportsmanlike conduct prohibited.',
    '• Best of rounds decides winner.',
  ],

 
},


{
  id: 'd1e8',
  name: 'QUANTUM QUEST',
  tagline: 'A treasure hunt-style surveying competition where teams solve location-based riddles, use navigation tools, and complete engineering challenges against time.',
  category: 'CIVIL',

  venue: 'To Be Announced',

  icon: '',
  color: '#f0147e',
  accent: 'rgba(242, 34, 239, 0.15)',
  image: 'quantumquest',
  team: 'Team of 3–5',

  description: 'QUANTUM QUEST is an exciting treasure hunt-style competition that challenges participants to apply surveying skills, navigation techniques, and problem-solving abilities. Teams use instruments like compasses and measuring tapes to solve location-based riddles and complete surveying tasks while racing against time. Each checkpoint presents new challenges testing accuracy, efficiency, and teamwork. The event blends engineering principles with adventure, rewarding strategic thinking and precise navigation.',

  rules: [
    '• Team size must be 3 to 5 members. No changes allowed after registration.',
    '• Competition follows a treasure hunt-style format with surveying tasks and riddles.',
    '• All checkpoints must be completed within the given time limit.',
    '• Scoring is based on accuracy, navigation efficiency, and time taken.',
    '• Answers must be submitted at each checkpoint; incorrect submissions may incur penalties.',
    '• Judges’ decision will be final; fastest accurate teams rank higher.',
    '• No external help, unauthorized tools, or interference with other teams allowed.',
  ],

  student_incharge_contact: '',
  faculty_incharge_contact: ''
},


{
  id: 'd1e9',
  name: 'KEY-STONE CHALLENGE',
  tagline: 'A hands-on structural engineering competition where teams design and build a functional bowstring arch bridge model focusing on strength, stability, and efficiency.',
  category: 'CIVIL',

  venue: 'To Be Announced',

  icon: '',
  color: '#f0147e',
  accent: 'rgba(242, 34, 239, 0.15)',
  image: 'keystonechallenge',
  team: 'Team of 3–4',

  description: 'KEY-STONE CHALLENGE is a structural engineering competition where participants design and construct a functional bowstring arch bridge model. The event emphasizes creativity, teamwork, and engineering principles, focusing on load distribution, structural stability, material efficiency, and construction precision. Teams must use provided materials to build a stable and efficient bridge model.',

  rules: [
    '• Team size must be 3 to 4 members. No changes allowed after registration.',
    '• Only materials provided or explicitly approved by organizers can be used.',
    '• Teams must design and construct a bowstring arch bridge model.',
    '• Structure must efficiently handle load distribution and maintain stability.',
    '• Material usage should be optimized for strength and efficiency.',
    '• Proper alignment and construction precision are mandatory.',
    '• Judges’ decision will be final.',
  ],


},



{
  id: 'd1e12',
  name: 'RAMP WALK',
  tagline: 'A fashion and performance-based ramp walk event where participants showcase confidence, style, and presentation skills on a themed runway.',
  category: 'CULTURAL',

  venue: 'To Be Announced',

  icon: '',
  color: '#ff4da6',
  accent: 'rgba(255, 77, 166, 0.15)',
  image: 'rampwalk',

  team: 'solo',

  description: 'RAMP WALK is a cultural performance event where participants showcase their confidence, walk style, and overall presentation on a runway. The event evaluates personality, styling, and stage presence based on a given theme (cultural or non-cultural).',

  rules: [
    '• Each participant will be given a maximum of 1 minute for ramp walk performance.',
    '• Exceeding time limit may lead to negative marking.',
    '• Participants must maintain decent and presentable attire.',
    '• Revealing or inappropriate outfits are strictly not allowed.',
    '• Participants should follow the given theme (if announced).',
    '• Judging will be based on confidence, attitude, walk style, posture, outfit, and overall impact.',
    '• Participants must report at least 30 minutes before the event starts.',
    '• Use of props is allowed only with prior approval from organizers.',
    '• Participants must maintain discipline and follow organizer instructions.',
    '• Judges’ decision will be final and binding.',
  ],

  details: {
    date: '8th & 9th May',
    time: '3:00 PM to 5:00 PM'
  },

},













    ],
  },
};

// ─── SVG ILLUSTRATIONS PER EVENT TYPE ────────────────────────────────────────
const EventIllustration = ({ type, color }) => {
  const c = color;
  const illustrations = {
   code_relay: (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="event-svg">
    <defs>
      <radialGradient id="cr-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={c} stopOpacity="0.3"/>
        <stop offset="100%" stopColor={c} stopOpacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="160" cy="115" rx="130" ry="75" fill="url(#cr-glow)"/>
    <line x1="40" y1="165" x2="280" y2="165" stroke={c} strokeWidth="1.5" opacity="0.3"/>
    {/* Runner 1 */}
    <circle cx="80" cy="120" r="10" fill="none" stroke={c} strokeWidth="2"/>
    <line x1="80" y1="130" x2="80" y2="155" stroke={c} strokeWidth="2"/>
    <line x1="80" y1="140" x2="65" y2="153" stroke={c} strokeWidth="1.8"/>
    <line x1="80" y1="140" x2="100" y2="150" stroke={c} strokeWidth="1.8"/>
    <line x1="80" y1="155" x2="68" y2="168" stroke={c} strokeWidth="1.8"/>
    <line x1="80" y1="155" x2="92" y2="168" stroke={c} strokeWidth="1.8"/>
    {/* Runner 2 */}
    <circle cx="220" cy="120" r="10" fill="none" stroke={c} strokeWidth="2"/>
    <line x1="220" y1="130" x2="220" y2="155" stroke={c} strokeWidth="2"/>
    <line x1="220" y1="140" x2="205" y2="150" stroke={c} strokeWidth="1.8"/>
    <line x1="220" y1="140" x2="238" y2="153" stroke={c} strokeWidth="1.8"/>
    <line x1="220" y1="155" x2="208" y2="168" stroke={c} strokeWidth="1.8"/>
    <line x1="220" y1="155" x2="232" y2="168" stroke={c} strokeWidth="1.8"/>
    {/* Baton */}
    <rect x="126" y="130" width="68" height="22" rx="5" fill="none" stroke={c} strokeWidth="1.8"/>
    <rect x="128" y="132" width="64" height="18" rx="3" fill={c} fillOpacity="0.12"/>
    <text x="160" y="145" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={c} fillOpacity="0.9">{'<relay />'}</text>
    <line x1="100" y1="141" x2="126" y2="141" stroke={c} strokeWidth="1" opacity="0.5" strokeDasharray="4 3">
      <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="0.6s" repeatCount="indefinite"/>
    </line>
    <line x1="194" y1="141" x2="220" y2="141" stroke={c} strokeWidth="1" opacity="0.5" strokeDasharray="4 3">
      <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="0.6s" repeatCount="indefinite"/>
    </line>
    <text x="50" y="72" fontFamily="monospace" fontSize="8" fill={c} fillOpacity="0.5">fn pass()</text>
    <text x="195" y="72" fontFamily="monospace" fontSize="8" fill={c} fillOpacity="0.5">run(x++)</text>
    <text x="115" y="58" fontFamily="monospace" fontSize="8" fill={c} fillOpacity="0.7">01101001</text>
  </svg>
),

escape: (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="event-svg">
    <defs>
      <radialGradient id="etr-glow" cx="50%" cy="55%" r="45%">
        <stop offset="0%" stopColor={c} stopOpacity="0.3"/>
        <stop offset="100%" stopColor={c} stopOpacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="160" cy="120" rx="115" ry="75" fill="url(#etr-glow)"/>
    <rect x="108" y="52" width="104" height="148" rx="6" fill="none" stroke={c} strokeWidth="2.2" opacity="0.9"/>
    <rect x="116" y="62" width="40" height="55" rx="3" fill={c} fillOpacity="0.08" stroke={c} strokeWidth="1" opacity="0.6"/>
    <rect x="164" y="62" width="40" height="55" rx="3" fill={c} fillOpacity="0.08" stroke={c} strokeWidth="1" opacity="0.6"/>
    <rect x="116" y="126" width="40" height="60" rx="3" fill={c} fillOpacity="0.08" stroke={c} strokeWidth="1" opacity="0.6"/>
    <rect x="164" y="126" width="40" height="60" rx="3" fill={c} fillOpacity="0.08" stroke={c} strokeWidth="1" opacity="0.6"/>
    <circle cx="200" cy="147" r="7" fill="none" stroke={c} strokeWidth="2"/>
    <rect x="197" y="147" width="6" height="9" rx="1" fill="none" stroke={c} strokeWidth="1.5"/>
    <circle cx="200" cy="147" r="13" fill={c} fillOpacity="0.12">
      <animate attributeName="r" values="13;17;13" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/>
    </circle>
    <g transform="translate(62,90) rotate(-30)">
      <circle cx="0" cy="0" r="9" fill="none" stroke={c} strokeWidth="1.8"/>
      <circle cx="0" cy="0" r="5" fill="none" stroke={c} strokeWidth="1.2"/>
      <rect x="9" y="-2" width="28" height="4" rx="2" fill="none" stroke={c} strokeWidth="1.5"/>
      <rect x="28" y="2" width="4" height="6" rx="1" fill={c} fillOpacity="0.7"/>
      <rect x="22" y="2" width="3" height="5" rx="1" fill={c} fillOpacity="0.7"/>
      <animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite"/>
    </g>
    <circle cx="255" cy="65" r="15" fill="none" stroke={c} strokeWidth="1.5" opacity="0.7"/>
    <line x1="255" y1="65" x2="255" y2="55" stroke={c} strokeWidth="1.5" opacity="0.8">
      <animateTransform attributeName="transform" type="rotate" from="0 255 65" to="360 255 65" dur="10s" repeatCount="indefinite"/>
    </line>
    <line x1="255" y1="65" x2="263" y2="65" stroke={c} strokeWidth="1.2" opacity="0.8">
      <animateTransform attributeName="transform" type="rotate" from="0 255 65" to="360 255 65" dur="120s" repeatCount="indefinite"/>
    </line>
  </svg>
),

inception: (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="event-svg">
    <defs>
      <radialGradient id="ix-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={c} stopOpacity="0.35"/>
        <stop offset="100%" stopColor={c} stopOpacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="160" cy="110" rx="125" ry="82" fill="url(#ix-glow)"/>
    <rect x="66" y="33" width="188" height="155" rx="8" fill="none" stroke={c} strokeWidth="1.6" opacity="0.9" transform="rotate(0 160 110)"/>
    <rect x="88" y="52" width="144" height="116" rx="6" fill="none" stroke={c} strokeWidth="1.4" opacity="0.75" transform="rotate(6 160 110)"/>
    <rect x="108" y="70" width="104" height="80" rx="4" fill="none" stroke={c} strokeWidth="1.2" opacity="0.6" transform="rotate(12 160 110)"/>
    <rect x="128" y="87" width="64" height="46" rx="3" fill="none" stroke={c} strokeWidth="1" opacity="0.45" transform="rotate(18 160 110)"/>
    <rect x="144" y="100" width="32" height="20" rx="2" fill="none" stroke={c} strokeWidth="0.8" opacity="0.3" transform="rotate(24 160 110)"/>
    <circle cx="160" cy="110" r="5" fill={c} opacity="0.9">
      <animate attributeName="r" values="5;8;5" dur="2.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    <line x1="66" y1="33" x2="254" y2="188" stroke={c} strokeWidth="0.8" opacity="0.2"/>
    <line x1="254" y1="33" x2="66" y2="188" stroke={c} strokeWidth="0.8" opacity="0.2"/>
    {[[[66,33],[254,33],[66,188],[254,188]]].flat().map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r="3" fill={c} opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.1;0.6" dur={`${1.5+i*0.4}s`} repeatCount="indefinite"/>
      </circle>
    ))}
  </svg>
),

casegon: (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="event-svg">
    <defs>
      <radialGradient id="cg-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={c} stopOpacity="0.3"/>
        <stop offset="100%" stopColor={c} stopOpacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="160" cy="115" rx="120" ry="78" fill="url(#cg-glow)"/>
    <polygon points="160,42 218,75 218,145 160,178 102,145 102,75" fill="none" stroke={c} strokeWidth="1.5" opacity="0.35"/>
    <rect x="110" y="90" width="100" height="74" rx="7" fill="none" stroke={c} strokeWidth="2.2"/>
    <rect x="118" y="96" width="84" height="62" rx="4" fill={c} fillOpacity="0.07"/>
    <path d="M140,90 L140,78 Q160,68 180,78 L180,90" fill="none" stroke={c} strokeWidth="2"/>
    <rect x="148" y="122" width="24" height="14" rx="3" fill="none" stroke={c} strokeWidth="1.8"/>
    <rect x="154" y="126" width="12" height="6" rx="1.5" fill={c} fillOpacity="0.5"/>
    <line x1="110" y1="120" x2="210" y2="120" stroke={c} strokeWidth="1" opacity="0.4"/>
    <rect x="122" y="132" width="8" height="18" rx="1" fill={c} fillOpacity="0.5"/>
    <rect x="134" y="126" width="8" height="24" rx="1" fill={c} fillOpacity="0.7"/>
    <rect x="146" y="136" width="8" height="14" rx="1" fill={c} fillOpacity="0.4"/>
    {[[160,42],[218,75],[218,145],[160,178],[102,145],[102,75]].map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r="3.5" fill={c} opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur={`${1.6+i*0.2}s`} repeatCount="indefinite"/>
      </circle>
    ))}
  </svg>
),

bgmi: (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="event-svg">
    <defs>
      <radialGradient id="bg-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={c} stopOpacity="0.22"/>
        <stop offset="100%" stopColor={c} stopOpacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="160" cy="115" rx="130" ry="72" fill="url(#bg-glow)"/>

    {/* gun body */}
    <rect x="72" y="95" width="130" height="28" rx="4" fill="none" stroke={c} strokeWidth="2.2"/>
    <rect x="72" y="95" width="130" height="28" rx="4" fill={c} fillOpacity="0.1"/>

    {/* barrel */}
    <rect x="202" y="100" width="52" height="10" rx="2" fill="none" stroke={c} strokeWidth="2"/>
    <rect x="202" y="100" width="52" height="10" rx="2" fill={c} fillOpacity="0.12"/>

    {/* muzzle tip */}
    <rect x="252" y="97" width="8" height="16" rx="2" fill="none" stroke={c} strokeWidth="1.8"/>

    {/* muzzle flash */}
    <path d="M260,105 L272,98 L268,105 L278,100 L270,107 L278,114 L268,109 L272,116 L260,109 Z"
      fill={c} fillOpacity="0.5" stroke={c} strokeWidth="1">
      <animate attributeName="opacity" values="1;0.2;1" dur="0.4s" repeatCount="indefinite"/>
    </path>

    {/* trigger guard */}
    <path d="M110,123 Q115,148 135,148 Q155,148 160,123" fill="none" stroke={c} strokeWidth="2"/>

    {/* trigger */}
    <line x1="132" y1="123" x2="138" y2="140" stroke={c} strokeWidth="2.2"/>

    {/* grip */}
    <path d="M88,123 Q82,123 78,145 L108,145 Q110,130 108,123 Z" fill="none" stroke={c} strokeWidth="2"/>
    <path d="M88,123 Q82,123 78,145 L108,145 Q110,130 108,123 Z" fill={c} fillOpacity="0.1"/>
    <line x1="82" y1="132" x2="104" y2="132" stroke={c} strokeWidth="1" opacity="0.5"/>
    <line x1="80" y1="138" x2="104" y2="138" stroke={c} strokeWidth="1" opacity="0.5"/>
    <line x1="79" y1="144" x2="104" y2="144" stroke={c} strokeWidth="1" opacity="0.5"/>

    {/* scope */}
    <rect x="148" y="86" width="38" height="10" rx="2" fill="none" stroke={c} strokeWidth="1.8"/>
    <circle cx="167" cy="91" r="4" fill="none" stroke={c} strokeWidth="1.2"/>
    <circle cx="167" cy="91" r="1.5" fill={c} opacity="0.8"/>

    {/* magazine */}
    <rect x="162" y="123" width="28" height="20" rx="3" fill="none" stroke={c} strokeWidth="1.8"/>
    <rect x="162" y="123" width="28" height="20" rx="3" fill={c} fillOpacity="0.1"/>

    {/* bullet 1 */}
    <g>
      <animateTransform attributeName="transform" type="translate" values="0,0;-180,0" dur="1.2s" repeatCount="indefinite"/>
      <ellipse cx="58" cy="105" rx="10" ry="5" fill={c} fillOpacity="0.9"/>
      <path d="M68,105 L48,105" fill="none" stroke={c} strokeWidth="1.2" strokeDasharray="4,3" opacity="0.5"/>
    </g>

    {/* bullet 2 - staggered */}
    <g>
      <animateTransform attributeName="transform" type="translate" values="0,0;-180,0" dur="1.2s" begin="0.6s" repeatCount="indefinite"/>
      <ellipse cx="58" cy="105" rx="10" ry="5" fill={c} fillOpacity="0.7"/>
      <path d="M68,105 L48,105" fill="none" stroke={c} strokeWidth="1.2" strokeDasharray="4,3" opacity="0.4"/>
    </g>

    {/* corner brackets */}
    <path d="M68,55 L68,68 L82,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M252,55 L252,68 L238,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M68,165 L68,152 L82,152" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M252,165 L252,152 L238,152" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>

    {/* pulsing dot */}
    <circle cx="82" cy="175" r="3" fill={c} opacity="0.9"/>
    <circle cx="82" cy="175" r="3" fill={c} opacity="0.6">
      <animate attributeName="r" values="3;10;3" dur="1.4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.6;0;0.6" dur="1.4s" repeatCount="indefinite"/>
    </circle>
  </svg>
),

cadverse: (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="event-svg">
    <rect x="30" y="25" width="260" height="120" fill="none" stroke={c} strokeWidth="0.6" strokeDasharray="4,3" opacity="0.4"/>
    <line x1="30" y1="85" x2="290" y2="85" stroke={c} strokeWidth="0.5" opacity="0.25"/>
    <line x1="160" y1="25" x2="160" y2="145" stroke={c} strokeWidth="0.5" opacity="0.25"/>
    <rect x="75" y="40" width="80" height="70" fill="none" stroke={c} strokeWidth="2"/>
    <rect x="75" y="40" width="80" height="70" fill={c} fillOpacity="0.07"/>
    <line x1="65" y1="40" x2="75" y2="40" stroke={c} strokeWidth="1.2"/>
    <line x1="65" y1="110" x2="75" y2="110" stroke={c} strokeWidth="1.2"/>
    <line x1="65" y1="40" x2="65" y2="110" stroke={c} strokeWidth="1"/>
    <line x1="155" y1="25" x2="155" y2="35" stroke={c} strokeWidth="1.2"/>
    <line x1="165" y1="30" x2="240" y2="30" stroke={c} strokeWidth="1.2"/>
    <line x1="240" y1="25" x2="240" y2="35" stroke={c} strokeWidth="1.2"/>
    <path d="M165,60 L185,60 L180,42 L232,42 L232,82 L165,82 Z" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1.5"/>
    <circle cx="198" cy="98" r="12" fill="none" stroke={c} strokeWidth="1.5"/>
    <circle cx="198" cy="98" r="4" fill={c} opacity="0.8"/>
    <line x1="30" y1="120" x2="290" y2="120" stroke={c} strokeWidth="2"/>
    <line x1="30" y1="116" x2="30" y2="124" stroke={c} strokeWidth="1.5"/>
    <line x1="290" y1="116" x2="290" y2="124" stroke={c} strokeWidth="1.5"/>
    <circle cx="258" cy="56" r="2.5" fill={c} opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.2s" repeatCount="indefinite"/>
    </circle>
    <path d="M68,55 L68,68 L82,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M252,55 L252,68 L238,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
  </svg>
),

modelforgex: (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="event-svg">
    <ellipse cx="160" cy="105" rx="110" ry="58" fill="none" stroke={c} strokeWidth="0.6" strokeDasharray="3,3" opacity="0.3"/>
    <line x1="98" y1="65" x2="160" y2="38" stroke={c} strokeWidth="1.5"/>
    <line x1="222" y1="65" x2="160" y2="38" stroke={c} strokeWidth="1.5"/>
    <line x1="98" y1="65" x2="222" y2="65" stroke={c} strokeWidth="1.5"/>
    <line x1="98" y1="65" x2="98" y2="138" stroke={c} strokeWidth="1.5"/>
    <line x1="222" y1="65" x2="222" y2="138" stroke={c} strokeWidth="1.5"/>
    <line x1="98" y1="138" x2="222" y2="138" stroke={c} strokeWidth="1.5"/>
    <line x1="160" y1="38" x2="160" y2="105" stroke={c} strokeWidth="1" opacity="0.6"/>
    <line x1="98" y1="65" x2="160" y2="105" stroke={c} strokeWidth="1" opacity="0.6"/>
    <line x1="222" y1="65" x2="160" y2="105" stroke={c} strokeWidth="1" opacity="0.6"/>
    <line x1="98" y1="138" x2="160" y2="105" stroke={c} strokeWidth="1" opacity="0.6"/>
    <line x1="222" y1="138" x2="160" y2="105" stroke={c} strokeWidth="1" opacity="0.6"/>
    <circle cx="160" cy="38" r="5" fill={c}/>
    <circle cx="98" cy="65" r="5" fill={c}/>
    <circle cx="222" cy="65" r="5" fill={c}/>
    <circle cx="98" cy="138" r="5" fill={c}/>
    <circle cx="222" cy="138" r="5" fill={c}/>
    <circle cx="160" cy="105" r="7" fill={c} opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.4;0.9" dur="1.4s" repeatCount="indefinite"/>
    </circle>
    <path d="M180,138 Q194,152 188,168 Q176,178 164,172 Q152,166 156,150 Q162,140 172,138 Z" fill={c} fillOpacity="0.25" stroke={c} strokeWidth="1.5"/>
    <path d="M68,55 L68,68 L82,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M252,55 L252,68 L238,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
  </svg>
),

tugofwar: (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="event-svg">
    <line x1="20" y1="105" x2="300" y2="105" stroke={c} strokeWidth="2.5"/>
    <circle cx="160" cy="105" r="6" fill={c}/>
    <circle cx="160" cy="105" r="6" fill={c} opacity="0.5">
      <animate attributeName="r" values="6;16;6" dur="1.2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.5;0;0.5" dur="1.2s" repeatCount="indefinite"/>
    </circle>
    {/* left team */}
    <circle cx="65" cy="72" r="9" fill="none" stroke={c} strokeWidth="2"/>
    <line x1="65" y1="81" x2="65" y2="106" stroke={c} strokeWidth="2"/>
    <line x1="65" y1="90" x2="48" y2="98" stroke={c} strokeWidth="2"/>
    <line x1="65" y1="90" x2="80" y2="98" stroke={c} strokeWidth="2"/>
    <line x1="65" y1="106" x2="55" y2="125" stroke={c} strokeWidth="2"/>
    <line x1="65" y1="106" x2="75" y2="125" stroke={c} strokeWidth="2"/>
    <circle cx="35" cy="72" r="9" fill="none" stroke={c} strokeWidth="2"/>
    <line x1="35" y1="81" x2="35" y2="106" stroke={c} strokeWidth="2"/>
    <line x1="35" y1="90" x2="18" y2="98" stroke={c} strokeWidth="2"/>
    <line x1="35" y1="90" x2="50" y2="98" stroke={c} strokeWidth="2"/>
    <line x1="35" y1="106" x2="25" y2="125" stroke={c} strokeWidth="2"/>
    <line x1="35" y1="106" x2="45" y2="125" stroke={c} strokeWidth="2"/>
    {/* right team */}
    <circle cx="255" cy="72" r="9" fill="none" stroke={c} strokeWidth="2"/>
    <line x1="255" y1="81" x2="255" y2="106" stroke={c} strokeWidth="2"/>
    <line x1="255" y1="90" x2="238" y2="98" stroke={c} strokeWidth="2"/>
    <line x1="255" y1="90" x2="270" y2="98" stroke={c} strokeWidth="2"/>
    <line x1="255" y1="106" x2="245" y2="125" stroke={c} strokeWidth="2"/>
    <line x1="255" y1="106" x2="265" y2="125" stroke={c} strokeWidth="2"/>
    <circle cx="285" cy="72" r="9" fill="none" stroke={c} strokeWidth="2"/>
    <line x1="285" y1="81" x2="285" y2="106" stroke={c} strokeWidth="2"/>
    <line x1="285" y1="90" x2="268" y2="98" stroke={c} strokeWidth="2"/>
    <line x1="285" y1="90" x2="300" y2="98" stroke={c} strokeWidth="2"/>
    <line x1="285" y1="106" x2="275" y2="125" stroke={c} strokeWidth="2"/>
    <line x1="285" y1="106" x2="295" y2="125" stroke={c} strokeWidth="2"/>
    {/* rope wave */}
    <path d="M80,105 Q105,98 125,105 Q145,112 160,105" fill="none" stroke={c} strokeWidth="2.5" opacity="0.7"/>
    <path d="M160,105 Q175,98 195,105 Q215,112 240,105" fill="none" stroke={c} strokeWidth="2.5" opacity="0.7"/>
    <path d="M68,55 L68,68 L82,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M252,55 L252,68 L238,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
  </svg>
),

quantumquest: (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="event-svg">
    <ellipse cx="160" cy="110" rx="110" ry="44" fill="none" stroke={c} strokeWidth="1.5" opacity="0.6"/>
    <ellipse cx="160" cy="110" rx="110" ry="44" fill="none" stroke={c} strokeWidth="1.5" opacity="0.6" transform="rotate(60 160 110)"/>
    <ellipse cx="160" cy="110" rx="110" ry="44" fill="none" stroke={c} strokeWidth="1.5" opacity="0.6" transform="rotate(120 160 110)"/>
    <circle cx="160" cy="110" r="14" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="2"/>
    <circle cx="160" cy="110" r="5" fill={c} opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.4;0.9" dur="1s" repeatCount="indefinite"/>
    </circle>
    <circle cx="270" cy="110" r="6" fill={c}>
      <animateTransform attributeName="transform" type="rotate" from="0 160 110" to="360 160 110" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="50" cy="110" r="6" fill={c}>
      <animateTransform attributeName="transform" type="rotate" from="180 160 110" to="540 160 110" dur="3s" repeatCount="indefinite"/>
    </circle>
    <path d="M28,155 Q62,108 98,155 Q132,202 160,155 Q188,108 222,155 Q258,202 292,155" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M28,135 Q62,88 98,135 Q132,182 160,135 Q188,88 222,135 Q258,182 292,135" fill="none" stroke={c} strokeWidth="1.5" opacity="0.4"/>
    <path d="M68,55 L68,68 L82,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M252,55 L252,68 L238,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
  </svg>
),

keystonechallenge: (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="event-svg">
    <path d="M30,148 L30,105 Q30,38 160,22 Q290,38 290,105 L290,148" fill="none" stroke={c} strokeWidth="2"/>
    <path d="M30,148 L30,105 Q30,38 160,22 Q290,38 290,105 L290,148" fill={c} fillOpacity="0.05"/>
    <path d="M52,148 L52,108 Q52,55 160,40 Q268,55 268,108 L268,148" fill="none" stroke={c} strokeWidth="1" opacity="0.4"/>
    {/* voussoir blocks */}
    <path d="M30,105 L52,108 L54,128 L30,125 Z" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1.2"/>
    <path d="M52,108 L78,102 L82,122 L54,128 Z" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1.2"/>
    <path d="M78,102 L108,88 L114,108 L82,122 Z" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1.2"/>
    <path d="M212,88 L242,102 L238,122 L206,108 Z" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1.2"/>
    <path d="M242,102 L268,108 L266,128 L238,122 Z" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1.2"/>
    <path d="M268,108 L290,105 L290,125 L266,128 Z" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1.2"/>
    {/* keystone */}
    <path d="M108,88 L160,22 L212,88 L206,108 L114,108 Z" fill={c} fillOpacity="0.32" stroke={c} strokeWidth="2.2"/>
    <circle cx="160" cy="62" r="5" fill={c} opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.4;0.9" dur="1.1s" repeatCount="indefinite"/>
    </circle>
    <line x1="20" y1="148" x2="300" y2="148" stroke={c} strokeWidth="2.5"/>
    <path d="M68,55 L68,68 L82,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M252,55 L252,68 L238,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
  </svg>
),

rampwalk: (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="event-svg">
    <path d="M55,155 L160,28 L265,155 Z" fill={c} fillOpacity="0.07" stroke={c} strokeWidth="2"/>
    <line x1="55" y1="155" x2="265" y2="155" stroke={c} strokeWidth="2.5"/>
    <line x1="160" y1="28" x2="160" y2="155" stroke={c} strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>
    {/* walking figure */}
    <circle cx="160" cy="54" r="9" fill="none" stroke={c} strokeWidth="2"/>
    <line x1="160" y1="63" x2="160" y2="90" stroke={c} strokeWidth="2"/>
    <path d="M145" cy="76 L160,70 L175,76" fill="none" stroke={c} strokeWidth="2"/>
    <path d="M160,90 L148,112" stroke={c} strokeWidth="2"/>
    <path d="M160,90 L172,112" stroke={c} strokeWidth="2"/>
    {/* runway lights */}
    <circle cx="100" cy="155" r="3.5" fill={c} opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.2;0.9" dur="0.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="130" cy="155" r="3.5" fill={c} opacity="0.7">
      <animate attributeName="opacity" values="0.7;0.2;0.7" dur="0.8s" begin="0.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="190" cy="155" r="3.5" fill={c} opacity="0.7">
      <animate attributeName="opacity" values="0.7;0.2;0.7" dur="0.8s" begin="0.4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="220" cy="155" r="3.5" fill={c} opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.2;0.9" dur="0.8s" begin="0.6s" repeatCount="indefinite"/>
    </circle>
    <path d="M68,55 L68,68 L82,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M252,55 L252,68 L238,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M68,165 L68,152 L82,152" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M252,165 L252,152 L238,152" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
  </svg>
),

structuralshowdown: (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="event-svg">
    <line x1="18" y1="140" x2="302" y2="140" stroke={c} strokeWidth="2.5"/>
    <line x1="18" y1="62" x2="302" y2="62" stroke={c} strokeWidth="2"/>
    <line x1="18" y1="62" x2="18" y2="140" stroke={c} strokeWidth="2"/>
    <line x1="302" y1="62" x2="302" y2="140" stroke={c} strokeWidth="2"/>
    <line x1="88" y1="62" x2="88" y2="140" stroke={c} strokeWidth="1.5"/>
    <line x1="160" y1="62" x2="160" y2="140" stroke={c} strokeWidth="1.5"/>
    <line x1="232" y1="62" x2="232" y2="140" stroke={c} strokeWidth="1.5"/>
    <line x1="18" y1="62" x2="88" y2="140" stroke={c} strokeWidth="1.5"/>
    <line x1="88" y1="62" x2="160" y2="140" stroke={c} strokeWidth="1.5"/>
    <line x1="160" y1="62" x2="232" y2="140" stroke={c} strokeWidth="1.5"/>
    <line x1="232" y1="62" x2="302" y2="140" stroke={c} strokeWidth="1.5"/>
    <line x1="88" y1="140" x2="160" y2="62" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <line x1="160" y1="140" x2="232" y2="62" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M12,140 L22,162 L2,162 Z" fill={c} fillOpacity="0.5"/>
    <path d="M298,140 L308,162 L288,162 Z" fill={c} fillOpacity="0.5"/>
    <line x1="0" y1="162" x2="34" y2="162" stroke={c} strokeWidth="2"/>
    <line x1="286" y1="162" x2="320" y2="162" stroke={c} strokeWidth="2"/>
    <circle cx="18" cy="62" r="3.5" fill={c}/>
    <circle cx="88" cy="62" r="3.5" fill={c}/>
    <circle cx="160" cy="62" r="3.5" fill={c}>
      <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
    </circle>
    <circle cx="232" cy="62" r="3.5" fill={c}/>
    <circle cx="302" cy="62" r="3.5" fill={c}/>
    <path d="M68,30 L68,43 L82,43" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M252,30 L252,43 L238,43" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
  </svg>
),

roborush: (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="event-svg">
    {/* head */}
    <rect x="118" y="30" width="84" height="42" rx="5" fill="none" stroke={c} strokeWidth="2"/>
    <line x1="160" y1="72" x2="160" y2="78" stroke={c} strokeWidth="2"/>
    {/* antenna */}
    <line x1="160" y1="30" x2="160" y2="18" stroke={c} strokeWidth="1.5"/>
    <circle cx="160" cy="15" r="4" fill={c} opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="0.5s" repeatCount="indefinite"/>
    </circle>
    {/* eyes */}
    <circle cx="143" cy="48" r="7" fill="none" stroke={c} strokeWidth="1.5"/>
    <circle cx="177" cy="48" r="7" fill="none" stroke={c} strokeWidth="1.5"/>
    <circle cx="143" cy="48" r="3" fill={c} opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.2;0.9" dur="0.6s" repeatCount="indefinite"/>
    </circle>
    <circle cx="177" cy="48" r="3" fill={c} opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.2;0.9" dur="0.6s" begin="0.3s" repeatCount="indefinite"/>
    </circle>
    {/* body */}
    <rect x="108" y="78" width="104" height="72" rx="5" fill="none" stroke={c} strokeWidth="2"/>
    <rect x="108" y="78" width="104" height="72" rx="5" fill={c} fillOpacity="0.07"/>
    {/* chest display */}
    <rect x="122" y="90" width="76" height="30" rx="3" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1"/>
    <path d="M125,105 L134,94 L143,108 L152,96 L161,108 L170,94 L179,105 L188,94 L196,105" fill="none" stroke={c} strokeWidth="1.2"/>
    {/* arms */}
    <line x1="108" y1="90" x2="76" y2="104" stroke={c} strokeWidth="2"/>
    <rect x="62" y="100" width="16" height="24" rx="4" fill="none" stroke={c} strokeWidth="1.5"/>
    <line x1="212" y1="90" x2="244" y2="104" stroke={c} strokeWidth="2"/>
    <rect x="242" y="100" width="16" height="24" rx="4" fill="none" stroke={c} strokeWidth="1.5"/>
    {/* legs */}
    <line x1="135" y1="150" x2="130" y2="172" stroke={c} strokeWidth="2"/>
    <line x1="185" y1="150" x2="190" y2="172" stroke={c} strokeWidth="2"/>
    <rect x="120" y="170" width="22" height="10" rx="3" fill="none" stroke={c} strokeWidth="1.5"/>
    <rect x="178" y="170" width="22" height="10" rx="3" fill="none" stroke={c} strokeWidth="1.5"/>
    <path d="M68,55 L68,68 L82,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M252,55 L252,68 L238,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
  </svg>
),

lathecraftarena: (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="event-svg">
    {/* lathe bed */}
    <rect x="15" y="125" width="290" height="18" rx="4" fill="none" stroke={c} strokeWidth="2"/>
    <rect x="15" y="125" width="290" height="18" rx="4" fill={c} fillOpacity="0.1"/>
    {/* headstock */}
    <rect x="15" y="80" width="65" height="45" rx="4" fill="none" stroke={c} strokeWidth="2"/>
    <rect x="15" y="80" width="65" height="45" rx="4" fill={c} fillOpacity="0.08"/>
    {/* chuck */}
    <circle cx="88" cy="100" r="28" fill="none" stroke={c} strokeWidth="2"/>
    <circle cx="88" cy="100" r="18" fill="none" stroke={c} strokeWidth="1.5"/>
    <circle cx="88" cy="100" r="8" fill={c} fillOpacity="0.2" stroke={c} strokeWidth="1.5"/>
    {/* spinning spokes */}
    <g>
      <animateTransform attributeName="transform" type="rotate" from="0 88 100" to="360 88 100" dur="2s" repeatCount="indefinite"/>
      <line x1="88" y1="82" x2="88" y2="118" stroke={c} strokeWidth="1.5" opacity="0.6"/>
      <line x1="70" y1="100" x2="106" y2="100" stroke={c} strokeWidth="1.5" opacity="0.6"/>
    </g>
    {/* workpiece cylinder */}
    <rect x="116" y="92" width="148" height="16" rx="8" fill="none" stroke={c} strokeWidth="2"/>
    <rect x="116" y="92" width="148" height="16" rx="8" fill={c} fillOpacity="0.14"/>
    {/* tailstock */}
    <rect x="240" y="85" width="44" height="38" rx="4" fill="none" stroke={c} strokeWidth="2"/>
    <line x1="284" y1="100" x2="295" y2="100" stroke={c} strokeWidth="2"/>
    {/* cutting tool */}
    <path d="M168,108 L184,125 L184,138 L168,122 Z" fill={c} fillOpacity="0.28" stroke={c} strokeWidth="1.5"/>
    {/* spark particles */}
    <circle cx="170" cy="106" r="2" fill={c} opacity="0.9">
      <animate attributeName="cx" values="170;164;172;166" dur="0.4s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="106;96;100;88" dur="0.4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.9;0;0.9;0" dur="0.4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="172" cy="104" r="1.5" fill={c} opacity="0.8">
      <animate attributeName="cx" values="172;178;168;175" dur="0.35s" begin="0.1s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="104;92;96;84" dur="0.35s" begin="0.1s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.8;0;0.8;0" dur="0.35s" begin="0.1s" repeatCount="indefinite"/>
    </circle>
    <path d="M68,55 L68,68 L82,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M252,55 L252,68 L238,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
  </svg>
),

bridgeomania: (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="event-svg">
    {/* deck */}
    <line x1="15" y1="120" x2="305" y2="120" stroke={c} strokeWidth="3"/>
    {/* towers */}
    <rect x="95" y="52" width="14" height="68" fill="none" stroke={c} strokeWidth="2"/>
    <rect x="211" y="52" width="14" height="68" fill="none" stroke={c} strokeWidth="2"/>
    <line x1="95" y1="70" x2="109" y2="70" stroke={c} strokeWidth="1.5"/>
    <line x1="211" y1="70" x2="225" y2="70" stroke={c} strokeWidth="1.5"/>
    <line x1="95" y1="86" x2="109" y2="86" stroke={c} strokeWidth="1.5"/>
    <line x1="211" y1="86" x2="225" y2="86" stroke={c} strokeWidth="1.5"/>
    {/* main cables */}
    <path d="M15,75 Q102,46 160,58 Q218,46 305,75" fill="none" stroke={c} strokeWidth="2"/>
    {/* suspenders */}
    <line x1="50" y1="86" x2="50" y2="120" stroke={c} strokeWidth="1"/>
    <line x1="72" y1="76" x2="72" y2="120" stroke={c} strokeWidth="1"/>
    <line x1="126" y1="60" x2="126" y2="120" stroke={c} strokeWidth="1"/>
    <line x1="144" y1="58" x2="144" y2="120" stroke={c} strokeWidth="1"/>
    <line x1="160" y1="58" x2="160" y2="120" stroke={c} strokeWidth="1"/>
    <line x1="176" y1="58" x2="176" y2="120" stroke={c} strokeWidth="1"/>
    <line x1="194" y1="60" x2="194" y2="120" stroke={c} strokeWidth="1"/>
    <line x1="248" y1="76" x2="248" y2="120" stroke={c} strokeWidth="1"/>
    <line x1="270" y1="86" x2="270" y2="120" stroke={c} strokeWidth="1"/>
    {/* anchor cables */}
    <line x1="15" y1="75" x2="95" y2="52" stroke={c} strokeWidth="1.5"/>
    <line x1="305" y1="75" x2="225" y2="52" stroke={c} strokeWidth="1.5"/>
    {/* water ripples */}
    <path d="M15,136 Q62,148 105,136 Q150,124 195,136 Q238,148 305,136" fill="none" stroke={c} strokeWidth="1.2" opacity="0.4"/>
    <path d="M15,150 Q62,162 105,150 Q150,138 195,150 Q238,162 305,150" fill="none" stroke={c} strokeWidth="1.2" opacity="0.3"/>
    {/* tower beacons */}
    <circle cx="102" cy="52" r="4.5" fill={c} opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="218" cy="52" r="4.5" fill={c} opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.3s" begin="0.65s" repeatCount="indefinite"/>
    </circle>
    <path d="M68,30 L68,43 L82,43" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M252,30 L252,43 L238,43" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
  </svg>
),

maelstromm: (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="event-svg">
    <ellipse cx="160" cy="110" rx="130" ry="48" fill="none" stroke={c} strokeWidth="1.5" opacity="0.7"/>
    <ellipse cx="160" cy="110" rx="100" ry="37" fill="none" stroke={c} strokeWidth="1.4" opacity="0.6"/>
    <ellipse cx="160" cy="110" rx="72" ry="26" fill="none" stroke={c} strokeWidth="1.3" opacity="0.55"/>
    <ellipse cx="160" cy="110" rx="48" ry="17" fill="none" stroke={c} strokeWidth="1.2" opacity="0.6"/>
    <ellipse cx="160" cy="110" rx="28" ry="10" fill="none" stroke={c} strokeWidth="1.2" opacity="0.7"/>
    <ellipse cx="160" cy="110" rx="13" ry="5" fill="none" stroke={c} strokeWidth="1.5" opacity="0.85"/>
    {/* orbiting debris */}
    <circle cx="290" cy="110" r="4.5" fill={c} opacity="0.8">
      <animateTransform attributeName="transform" type="rotate" from="0 160 110" to="-360 160 110" dur="3.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="260" cy="110" r="3.5" fill={c} opacity="0.7">
      <animateTransform attributeName="transform" type="rotate" from="120 160 110" to="-240 160 110" dur="2.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="232" cy="110" r="3" fill={c} opacity="0.65">
      <animateTransform attributeName="transform" type="rotate" from="240 160 110" to="-120 160 110" dur="2.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="208" cy="110" r="3" fill={c} opacity="0.7">
      <animateTransform attributeName="transform" type="rotate" from="60 160 110" to="-300 160 110" dur="1.7s" repeatCount="indefinite"/>
    </circle>
    <circle cx="188" cy="110" r="2.5" fill={c} opacity="0.8">
      <animateTransform attributeName="transform" type="rotate" from="180 160 110" to="-180 160 110" dur="1.2s" repeatCount="indefinite"/>
    </circle>
    {/* center eye */}
    <circle cx="160" cy="110" r="10" fill={c} fillOpacity="0.18" stroke={c} strokeWidth="1.5"/>
    <circle cx="160" cy="110" r="4" fill={c} opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.3;0.9" dur="0.8s" repeatCount="indefinite"/>
    </circle>
    <path d="M68,55 L68,68 L82,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M252,55 L252,68 L238,68" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M68,165 L68,152 L82,152" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
    <path d="M252,165 L252,152 L238,152" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
  </svg>
),

vibecoding: (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="event-svg">
    <defs>
      <radialGradient id="vc-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={c} stopOpacity="0.3"/>
        <stop offset="100%" stopColor={c} stopOpacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="160" cy="110" rx="128" ry="80" fill="url(#vc-glow)"/>
    <path d="M110,110 Q110,62 160,62 Q210,62 210,110" fill="none" stroke={c} strokeWidth="2.5"/>
    <rect x="96" y="104" width="22" height="32" rx="11" fill="none" stroke={c} strokeWidth="2"/>
    <rect x="202" y="104" width="22" height="32" rx="11" fill="none" stroke={c} strokeWidth="2"/>
    <rect x="100" y="108" width="14" height="24" rx="7" fill={c} fillOpacity="0.2"/>
    <rect x="206" y="108" width="14" height="24" rx="7" fill={c} fillOpacity="0.2"/>
    <rect x="128" y="84" width="64" height="44" rx="5" fill="none" stroke={c} strokeWidth="1.5" opacity="0.8"/>
    <rect x="131" y="87" width="58" height="38" rx="3" fill={c} fillOpacity="0.07"/>
    <text x="135" y="99" fontFamily="monospace" fontSize="7.5" fill={c} fillOpacity="0.9">vibe()</text>
    <text x="135" y="110" fontFamily="monospace" fontSize="7.5" fill={c} fillOpacity="0.7">  .code()</text>
    <text x="135" y="121" fontFamily="monospace" fontSize="7.5" fill={c} fillOpacity="0.5">  .ship()</text>
    <rect x="135" y="122" width="5" height="8" rx="1" fill={c} opacity="0.9">
      <animate attributeName="opacity" values="0.9;0;0.9" dur="1.1s" repeatCount="indefinite"/>
    </rect>
    <path d="M126,148 Q134,140 142,148 Q150,156 158,148 Q166,140 174,148 Q182,156 190,148" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5">
      <animate attributeName="d" values="M126,148 Q134,140 142,148 Q150,156 158,148 Q166,140 174,148 Q182,156 190,148;M126,148 Q134,156 142,148 Q150,140 158,148 Q166,156 174,148 Q182,140 190,148;M126,148 Q134,140 142,148 Q150,156 158,148 Q166,140 174,148 Q182,156 190,148" dur="1.2s" repeatCount="indefinite"/>
    </path>
  </svg>
),
    
  };
  return illustrations[type] || null;
};

// ─── STARFIELD CANVAS ─────────────────────────────────────────────────────────
const Starfield = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    const stars = [];
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < 220; i++) {
      stars.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.2, speed: Math.random() * 0.3 + 0.05,
        opacity: Math.random(), opacityDelta: (Math.random() - 0.5) * 0.015,
        color: ['#ffffff','#a0cfff','#c8b4ff','#ffe5a0'][Math.floor(Math.random()*4)]
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        s.opacity += s.opacityDelta;
        if (s.opacity > 1 || s.opacity < 0.05) s.opacityDelta *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="starfield-canvas"/>;
};

// ─── NEBULA PLANETS ───────────────────────────────────────────────────────────
const NebulaOrbs = () => (
  <div className="nebula-container" aria-hidden="true">
    <div className="nebula n1"/>
    <div className="nebula n2"/>
    <div className="nebula n3"/>
    <div className="planet p1"/>
    <div className="planet p2"/>
    <div className="planet p3"/>
    <div className="grid-overlay"/>
  </div>
);

// ─── EVENT CARD ───────────────────────────────────────────────────────────────
const EventCard = ({ event, index, onClick, isActive }) => (
  <button
    className={`event-card ${isActive ? 'active' : ''}`}
    style={{ '--card-color': event.color, '--card-accent': event.accent, animationDelay: `${index * 0.08}s` }}
    onClick={() => onClick(event)}
    aria-label={`View details for ${event.name}`}
  >
    <div className="card-glow-border"/>
    <div className="card-category">
      <span className="cat-dot" style={{ background: event.color }}/>
      {event.category}
    </div>
    <div className="card-illustration">
      <EventIllustration type={event.image} color={event.color}/>
    </div>
    <div className="card-body">
      <div className="card-icon">{event.icon}</div>
      <h3 className="card-title">{event.name}</h3>
      <p className="card-tagline">{event.tagline}</p>
      <div className="card-meta">
        <span> {event.time}</span>
        <span>📍 {event.venue}</span>
      </div>
      <div className="team-size">{event.team}</div>
    </div>
    <div className="card-cta">VIEW DETAILS →</div>
  </button>
);

// ─── EVENT MODAL ──────────────────────────────────────────────────────────────
const EventModal = ({ event, onClose, dayColor }) => {
  const overlayRef = useRef(null);
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);
  const handleOverlay = (e) => { if (e.target === overlayRef.current) onClose(); };
  return (
    <div className="modal-overlay" ref={overlayRef} onClick={handleOverlay} role="dialog" aria-modal="true" aria-label={event.name}>
      <div className="modal-panel" style={{ '--modal-color': event.color, '--modal-accent': event.accent }}>
        <div className="modal-top-bar">
          <div className="modal-category">
            <span className="cat-dot" style={{ background: event.color }}/>
            {event.category}
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="modal-hero">
          <div className="modal-illustration">
            <EventIllustration type={event.image} color={event.color}/>
          </div>
          <div className="modal-header-text">
            <div className="modal-icon">{event.icon}</div>
            <h2 className="modal-title">{event.name}</h2>
            <p className="modal-tagline">{event.tagline}</p>
            <div className="modal-chips">
              
              <span className="chip">📍 {event.venue}</span>
              <span className="chip prize-chip" style={{ borderColor: event.color, color: event.color }}>🏆 {event.prize}</span>
            </div>
          </div>
        </div>
        <div className="modal-content">
          <div className="modal-section">
            <h4 className="section-label">ABOUT THE EVENT</h4>
            <p className="modal-description">{event.description}</p>
          </div>
          <div className="modal-section">
            <h4 className="section-label">RULES & REGULATIONS</h4>
            <ol className="rules-list">
              {event.rules.map((rule, i) => (
                <li key={i} className="rule-item" style={{ animationDelay: `${i * 0.05}s` }}>
                  <span className="rule-num" style={{ color: event.color }}>{String(i + 1).padStart(2, '0')}</span>
                  <span className="rule-text">{rule}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="modal-footer">
          <button
  className="register-btn"
  style={{ '--btn-color': event.color }}
  onClick={() =>
    window.open("https://forms.gle/SgSDRDcgDK4fmM877", "_blank")
  }
>
  REGISTER NOW
  <span className="btn-glow" />
</button>
          <button className="close-text-btn" onClick={onClose}>← Back to Events</button>
        </div>
      </div>
    </div>
  );
};

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function Events() {
  const [activeDay, setActiveDay] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  const switchDay = useCallback((day) => {
    if (day === activeDay) return;
    setTransitioning(true);
    setTimeout(() => { setActiveDay(day); setTransitioning(false); }, 300);
  }, [activeDay]);

  const day = DAYS[activeDay];

  return (
    <div className="app">
      <Starfield/>
      <NebulaOrbs/>

      {/* ── HEADER ── */}
      <header className="site-header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">✦</span>
           <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
  <div>
    <div className="logo-sub">TECHSHASTRA 2026</div>
  </div>
</Link>
          </div>
          <nav className="header-nav">
            <span className="nav-item">

              <Link to="/home" className="nav-item">
  Home
</Link>
            </span>
            <button
  className="nav-register"
  onClick={() => window.open("https://forms.gle/SgSDRDcgDK4fmM877", "_blank")}
>
  REGISTER
</button>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-eyebrow">
          <span className="eyebrow-dot"/>
          EVENTS LINEUP
          <span className="eyebrow-dot"/>
        </div>
        <h1 className="hero-title">
          <span className="title-line">BEYOND THE</span>
          <span className="title-line accent" style={{ color: day.color }}>HORIZON</span>
        </h1>
        <p className="hero-sub">
          Two days. 20+ events. One extraordinary festival of technology.
        </p>

        {/* Day Switcher */}
        <div className="day-switcher">
          {Object.entries(DAYS).map(([key, d]) => (
            <button
              key={key}
              className={`day-btn ${activeDay === Number(key) ? 'day-active' : ''}`}
              style={activeDay === Number(key) ? { '--day-color': d.color, '--day-glow': d.glow } : {}}
              onClick={() => switchDay(Number(key))}
            >
              <span className="day-label">{d.label}</span>
              <span className="day-sub">{d.subtitle}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ── EVENTS GRID ── */}
      <main className="events-section">
        <div className="day-header">
          <div className="day-line" style={{ background: day.color }}/>
          <div className="day-header-text">
            <span className="day-tag" style={{ color: day.color }}>— {day.label}</span>
            <h2 className="day-heading">{day.subtitle}</h2>
          </div>
          <div className="day-count" style={{ color: day.color }}>{day.events.length} EVENTS</div>
        </div>
        <div className={`events-grid ${transitioning ? 'fade-out' : 'fade-in'}`}>
          {day.events.map((event, i) => (
            <EventCard
              key={event.id}
              event={event}
              index={i}
              onClick={setSelectedEvent}
              isActive={selectedEvent?.id === event.id}
            />
          ))}
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <span className="logo-icon">✦</span> TECHSHASTRA 2026
          </div>
          <p className="footer-copy">Crafted with for the builders of tomorrow</p>
        </div>
      </footer>

      {/* ── MODAL ── */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          dayColor={day.color}
        />
      )}
    </div>
  );
}
