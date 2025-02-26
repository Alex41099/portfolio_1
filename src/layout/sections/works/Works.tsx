import React, {useState} from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./Work";
import photoProj1 from "../../../accets/images/proj-1.webp"
import photoProj3 from "../../../accets/images/photo_3.png"
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "../../tabmenu/TabMenu";
import {Container} from '../../../components/Container';
import {S} from './Works_Styles';
import {AnimatePresence, motion} from "framer-motion";

const worksItems = ["ALL", "LANDING PAGE", "REACT", "SPA"]
const worksArr = [
    {
        title: "Social Network",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit" +
            " amet, consectetur adipisicing elit.",
        photoProj: photoProj1,
        href: "https://alex41099.github.io/social-network/",
        github: "https://github.com/Alex41099/social-network",
        id: 1
    },
    {
        title: "Todo List",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit" +
            " amet, consectetur adipisicing elit.",
        photoProj: photoProj3,
        href: "https://alex41099.github.io/todoList/",
        github: "https://github.com/Alex41099/todoList",
        id: 2
    },
]

export const Works: React.FC = () => {
    const [workItem, setWorkItem] = useState<string>("ALL")

    const changeWorkItem = (work: string) => {
        setWorkItem(work)
    }

    let workFilter = worksArr
    if (workItem === "LANDING PAGE") {
        workFilter = workFilter.filter(w => w.title === "Todo List")
    }

    return (
        <S.StyledSection id={"works"}>
            <Container>
                <SectionTitle title={"My Works"}/>
                <TabMenu array={worksItems} changeWorkItem={changeWorkItem} workItem={workItem}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"}>
                    <AnimatePresence>
                        {workFilter.map(p => {
                            return <motion.div
                                layout
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                key={p.id}
                            ><Work photoProj={p.photoProj}
                                   title={p.title}
                                   description={p.description}
                                    href={p.href}
                                    github={p.github}/>
                            </motion.div>
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.StyledSection>
    );
};

