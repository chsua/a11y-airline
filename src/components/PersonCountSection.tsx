import "./PersonCountSection.css";
import SpinButton from "./SpinButton";

const PersonCountSection = () => {
  return (
    <section className="personCountSection">
      <div>
        <h1>승객 선택</h1>
        <SpinButton personType="ADULT" />
        <SpinButton personType="CHILDREN" />
        <SpinButton personType="BABY" />
      </div>
    </section>
  );
};

export default PersonCountSection;
