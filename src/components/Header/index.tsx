import Logo from "../../assets/logo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="logo todo app" />

      <form className={styles.newTaskForm}>
        <input placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
