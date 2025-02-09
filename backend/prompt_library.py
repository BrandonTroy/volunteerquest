hero_journey = {
    0: {
        "stage": "The Ordinary World",
        "description": "Introduce the hero in their everyday environment. Describe their routine, relationships, and the status quo of their life. Highlight any dissatisfaction, longing, or inner conflict the hero may have. This sets the baseline for the character's growth and helps readers relate to the hero before the adventure begins."
    },
    1: {
        "stage": "The Call to Adventure",
        "description": "Present an inciting incident that disrupts the hero's normal life. This could be a direct threat, an unexpected opportunity, or a mysterious message. The call should create a sense of urgency and hint at the larger conflict or quest that lies ahead. It should challenge the hero's comfortable existence and push them towards the unknown."
    },
    2: {
        "stage": "The Refusal of the Call",
        "description": "Show the hero's initial reluctance to leave their familiar world. This hesitation can stem from fear, self-doubt, or a sense of responsibility to their current life. Explore the internal struggle between the desire for adventure and the comfort of the known. This stage adds realism and depth to the hero's character."
    },
    3: {
        "stage": "Meeting the Mentor",
        "description": "Introduce a wise figure who provides guidance, training, or tools to prepare the hero for their journey. The mentor could be a physical person, a spiritual guide, or even a symbolic object. Their role is to offer insight, boost the hero's confidence, and equip them with knowledge or skills crucial for the challenges ahead."
    },
    4: {
        "stage": "The Ordeal",
        "description": "This is the central conflict of the story. Place the hero in a series of challenging situations that test their skills, resolve, and character. Introduce allies who aid the hero and enemies who oppose them. Each trial should push the hero to their limits, forcing them to grow and adapt. The ordeal often culminates in a major confrontation or crisis that represents the hero's greatest fear or challenge."
    },
    5: {
        "stage": "The Reward",
        "description": "After overcoming the ordeal, show the hero claiming their prize. This could be a physical object, crucial information, or a personal revelation. The reward should represent the achievement of the hero's immediate goal, but it may also bring new complications or responsibilities. This stage marks a turning point in the hero's journey and character development."
    },
    6: {
        "stage": "The Return",
        "description": "Depict the hero's journey back to their ordinary world, but now as a changed individual. Show how they apply the lessons learned and skills gained during their adventure to resolve lingering conflicts at home. Highlight the contrast between who they were at the beginning and who they've become. The return often involves a final test that proves the hero's transformation is complete."
    }
}



ROLE_1 = """
    ROLE : Short Story Writer,
    DESCRIPTION : Exceptional at turning real life tasks into an adventure story. 
    Your stories are enthralling and follow the Hero's Journey structure.
    You are a master of suspense and can create a sense of urgency in your stories. 
    You need to adapt and base your stories on two elements : 1) THEME and 2) ACTUAL TASK.  
    """

# this would be user_input
THEME_1 = "Harry Potter"

ACTUAL_TASK_1 = """
A tree plantation drive where you have to plant trees every week and take care of the trees and check on them. 
This is a 1 month activity and needs the kids to also learn about the benefits of the trees and other medicinal properoties. 
Creating awareness is also an element of the task.
"""


desc_current_chapter = """sub-quest: 1,
      "text": "Professor Sprout, the Herbology teacher, assigns a task to Harry, Ron, and Hermione to research the importance of trees in the wizarding world. They must learn about the medicinal properties of different tree species and their role in maintaining the balance of nature.",
      "task": "Research and create a list of 10 tree species with their medicinal properties",
      "output": "A document or presentation listing 10 tree species, their medicinal properties, and how they are used in the wizarding world"""

desc_current_chapter_2 = {'chapter_text': "As Harry, Ron, and Hermione delved deeper into their research on the medicinal properties of trees in the wizarding world, they stumbled upon an ancient spell that allowed them to communicate with trees. This led them to discover a hidden portal in the Whomping Willow that transported them to the mysterious town of Gravity Falls. There, they met Dipper and Mabel Pines, who were intrigued by the trio's knowledge of magical trees. Dipper, being the curious one, asked for their help in uncovering the secrets of the trees in Gravity Falls, which were said to have extraordinary healing properties. However, Harry, Ron, and Hermione were hesitant to get involved, fearing that it would distract them from their Hogwarts responsibilities and the danger that came with exploring the unknown.",
 'task': 'Plant 5 trees in your local community and research their medicinal properties, take photos of the trees and create a poster or social media post to raise awareness about the importance of tree plantation, use hashtag #GravityFallsTreePlantation',
 'proof': {'photo': 'photo of the planted trees',
  'poster': 'design of the poster or social media post',
  'hashtag': '#GravityFallsTreePlantation'}}

theme_new_chapter = "Gravity Falls"

theme_new_chapter_2 = "Harry Potter"

quest_real_desc = """
A tree plantation drive where you have to plant trees every week and take care of the trees and check on them. 
This is a 1 month activity and needs the kids to also learn about the benefits of the trees and other medicinal properoties. 
Creating awareness is also an element of the task.
"""

# give it the context of the entire stage.
desc_agent_2 = """"""

desc_agent_1 = """You would be given a current stage of the story or just the description of the task(if story stage is null). 
You have to WEAVE the old story, characters and theme and segue into the new theme with the next chapter for the STAGE = [{hero_journey}] and generate a unique continuing story based in the {theme_new_chapter} universe.
I also want you to clearly state Text and the TASK for each. The TASK here would be a real world task but still hinting to the storyline. 
This is something that they can actually do. Ask them for tangible outputs from these tasks for proof. OUTPUT should be in a JSON format(no preamble) containing three things : 1) chapter_text 2) Task 3) Proof 
"""

percent_done = 2
percent_done_2 = 3
