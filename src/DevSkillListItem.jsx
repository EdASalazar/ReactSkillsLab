import "./DevSkillList";

export default function DevSkillListItem(skill) {
  return (
    <li className="SkillListItem teal-text">
      {skill.name} <div className="level"> Level {skill.level}</div>
    </li>
  );
}
