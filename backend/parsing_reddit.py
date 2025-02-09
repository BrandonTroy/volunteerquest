import praw 


CLIENT_ID = "fWoHBn1hrcVs0phlzanmsA"
SECRET = "pHVPgwmvcAMneFYWpRa2j2UluIRGhw"


import praw

def test_reddit_connection():
    try:
        # Initialize the Reddit instance
        reddit = praw.Reddit(
    client_id=  CLIENT_ID,
    client_secret= SECRET,
    user_agent= "VolunteerFinder"
)

        
        # Try to fetch the name of the authenticated user (if using script type app)
        # or just fetch a random subreddit's name (if using read-only mode)
        if reddit.read_only:
            print(f"Successfully connected to Reddit API in read-only mode.")
            print(f"Random subreddit: r/{reddit.random.display_name}")
        else:
            print(f"Successfully connected to Reddit API.")
            print(f"Authenticated as: u/{reddit.user.me()}")
        
        return True
    
    except praw.exceptions.PRAWException as e:
        print(f"Error: {e}")
        return False
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return False

if __name__ == "__main__":
    if test_reddit_connection():
        print("PRAW instance is correctly set up and running.")
    else:
        print("Failed to set up PRAW instance correctly.")


# parse the subreddit in question for specific keywords : Help, Volunteer

# List of relevant subreddits
subreddits = ["NorthCarolina", "raleigh", "triangle", "charlotte", "asheville", "wilmington"]

# Search for posts with '[Volunteer]' in the title
for subreddit_name in subreddits:
    subreddit = reddit.subreddit(subreddit_name)
    for submission in subreddit.search('title:"[Volunteer]"', sort="new", limit=None):
        print(f"Subreddit: r/{subreddit_name}")
        print(f"Title: {submission.title}")

# send message to the user post explaining the platform in a few sentences 
# call to action identification 
# create_card() when they respond and send them a link to check the status and approve of volunteers. 
