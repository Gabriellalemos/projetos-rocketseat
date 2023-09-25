import { Play } from "phosphor-react";
import { useContext } from "react";
import * as zod from "zod";
import { FormProvider, useForm } from "react-hook-form";

import {
  HomeContainer,
  StartCountdownsButton,
  StopCountdownsButton,
} from "./styles";
import { differenceInSeconds } from "date-fns";
import NewCycleForm from "./NewCycleForm";
import Countdown from "./Countdown";
import { zodResolver } from "@hookform/resolvers/zod";
import { CyclesContext } from "../../contexts/CyclesContext";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod.number().min(5).max(60),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

const Home = () => {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, reset, watch } = newCycleForm;

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data);
    reset();
  };

  const task = watch("task");
  const isSubmitDisabled = !task;

  /**
   * Prop Drilling é quando tem muitas propriedades apenas para comunicacao entre componentes
   * Context API é uma forma de compartilhar dados entre componentes sem precisar passar props manualmente em cada nível da árvore
   */

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownsButton type="button" onClick={interruptCurrentCycle}>
            <Play size={24} />
            Interromper
          </StopCountdownsButton>
        ) : (
          <StartCountdownsButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownsButton>
        )}
      </form>
    </HomeContainer>
  );
};

export default Home;
