from langchain_core.prompts import PromptTemplate
from prompt_library import hero_journey
from langchain_groq import ChatGroq
from langchain_core.output_parsers import JsonOutputParser 


llm = ChatGroq(
model= "llama-3.3-70b-versatile",
groq_api_key = "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",
temperature = 1) 


def test_llm_instance():
    response = llm.invoke("what is 1+1?")
    print(response.content)


def generate_entire_story(ROLE, THEME, ACTUAL_TASK):
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

"""
# mongo DB statements to fetch the data
def get_percent_done():
    pass 

# org_quest
def get_quest_real_desc():
    pass

def get_theme_new_chapter():
    pass

def get_desc_current_chapter():
    pass

    
data = {
    "hero_journey" : hero_journey[get_percent_done()],
    "theme_new_chapter" : get_theme_new_chapter(),
    "quest_real_desc" : get_quest_real_desc(),
    "desc_current_chapter" : get_desc_current_chapter()}
"""
def generate_next_chapter(desc_current_chapter, theme_current_chapter, quest_real_desc, percent_done):
    """
    desc_current_chapter : str : Description of the current chapter.
    theme_current_chapter : str : Theme of the current chapter, for example, Harry Potter. 
    quest_real_desc : str : Real world task to be performed by the user.
    percent_done : float : Percentage of the task done by the group or individual so far.

    """
    prompt_generate_next_chapter = PromptTemplate.from_template("""You are given a current stage of an existing storyline that is as follows = [{desc_current_chapter}]. If this is null, start a new story from scratch using the following information.
You have to WEAVE the old story, characters and theme and segue into the new theme(by a clever crossover among characters) with the next chapter for the STAGE = [{stage}] and generate a unique continuing story based in the {theme_new_chapter} universe. 
For your context here is the descirpiton of the actual task that this new story should be a part of, REAL_TASK = [{quest_real_desc}]. I also want you to clearly state Text and the TASK for each. The TASK here would be a real world task but still hinting to the storyline. 
This is something that they can actually do. Ask them for tangible outputs from these tasks for proof. OUTPUT should be in a JSON OBJECT format (not an array, no preamble). OUTPUT ONLY valid JSON containing three things : 1) chapter_text(AROUND 150 words) 2) Task 3) Proof.
This is an example of the output format that you should follow (imagine the following is a JSON object with parenthesis replaced by braces): ("chapter_text" : "Once upon a time", "Task" : "Plant a tree", "Proof" : "A picture of the tree planted").
""")
    

    chain_extract = prompt_generate_next_chapter | llm
    response = chain_extract.invoke(input = {"desc_current_chapter" : (desc_current_chapter if desc_current_chapter else "null"), 
                                             "theme_new_chapter" : theme_current_chapter,
                                               "quest_real_desc" : quest_real_desc, 
                                                "stage" : hero_journey[int(percent_done * 7)]})
    json_parser = JsonOutputParser()
    return json_parser.parse(response.content)

# if __name__ == "__main__":
#     test_reply = generate_next_chapter(data)
#     json_parser = JsonOutputParser()
#     # this is the final json output
#     json_rep = json_parser.parse(test_reply.content)
#     print(json_rep)

