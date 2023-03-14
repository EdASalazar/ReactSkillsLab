import DevSkillListItem from "./DevSkillListItem";

export default function DevSkillList({ skills }) {
  const DevSkillListItems = skills.map((skill, idx) => (
    <DevSkillListItem
      name={skill.name}
      level={skill.level}
      index={idx}
      key={idx}
    />
  ));
  console.log(DevSkillListItems);

  return <ul className="SkillList">{DevSkillListItems}</ul>;
}
