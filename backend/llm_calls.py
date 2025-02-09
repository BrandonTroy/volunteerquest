from langchain_core.prompts import PromptTemplate
from prompts import *
from langchain_groq import ChatGroq
from langchain_core.output_parsers import JsonOutputParser 


llm = ChatGroq(
model= "llama-3.3-70b-versatile",
groq_api_key = "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",
temperature = 1) 


def test_llm_instance():
    response = llm.invoke("what is 1+1?")
    print(response.content)


def generate_story(ROLE, THEME, ACTUAL_TASK):
    """
    ROLE : str : LLM role
    THEME : str : Theme of the story to be followed, for example, Harry Potter or Lord of the Rings.
    ACTUAL_TASK : str : Real world task to be performed by the user, for example, A tree plantation drive 
    """


    slate_generate_prompt_template = PromptTemplate.from_template( 
    """ 
    You are an excellent {ROLE}. Generate a unique story based in the {THEME} universe. 
    The story should culminate in the following task: {ACTUAL_TASK} encapsulting the essence of the theme and story.
    The story should have seven sub-quests culminating in the aforementioned task. The entire story should be contained in these seven sub-queries. 
    I also want you to clearly state Text and the TASK for each. The TASK here would be a real world task but still hinting to the storyline. 
    This is something that they can actually do. ask them for tangible outputs from these tasks for proof. OUTPUT : A story with 7 sub-quests in a valid JSON format(no preamble).
    """)

    chain_extract = slate_generate_prompt_template | llm 
    response = chain_extract.invoke(input = { "ROLE" : ROLE_1, "THEME" : THEME_1, "ACTUAL_TASK" : ACTUAL_TASK_1})   
    return response

def extract_rewards(text):
    """
    text : str : Text from the input to extract rewards from.
    """
    rewards_extract_prompt_template = PromptTemplate.from_template(
    """
    Given the text about the rewards, can you extract the kind of rewards that they might be interested in. Feel free to put categories and sub-categories.
    OUTPUT : A list of rewards that the user might be interested in.
    """
    )

    chain_extract = rewards_extract_prompt_template | llm
    response = chain_extract.invoke(input = {"text" : text})
    return response

if __name__ == "__main__":
    test_llm_instance()
    test_reply = generate_story(ROLE_1, THEME_1, ACTUAL_TASK_1)
    json_parser = JsonOutputParser()
    # this is the final json output
    json_rep = json_parser.parse(test_reply.content)
    print(json_rep)

