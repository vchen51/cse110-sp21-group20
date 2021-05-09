# Workflow

* Status: **Accepted**
* Deciders: Pourya Joulapour, Berkeley Erwin, Josh Dreben, Rosey Bugayong, Tyler Ng, Vanessa Chen, Samuel Kent, Tanay Reddy
* Date: May 8, 2021

## Context and Problem Statement
To ensure a smooth workflow, we need to decide how our git repository is managed going forward.


## Decision Drivers

* Messy pushing could make the repo chaotic
* Devs can accidentally overwrite each others' work

## Considered Options

* Use the workflow described in [this document](/specs/ci/ci.drawio.png)
* Modify the workflow described in the document above

## Decision Outcome
Go with option 2 - we will require members to follow the outline, but branch protections will be manual (!). The pipeline will be implemented and details will be put in a second document.

Updates to the workflow have been made.

### Positive Consequences

* An attempt to make the repo cleaner.

### Negative Consequences

* Makes it more tedious to commit simple documents.

## Pros and Cons of the Options

### [option 1]

All members of the team will follow the workflow described in the linked document. Once approved, more information will be provided.

* Makes the repo cleaner, and gives a clear process of how development will occur
* Can make it more complicated to upload admin documents

### [option 2]

Follows the same as option 1, but with modifications. The modifications will be written here once they are given.

* Same as option 1.

## Links
* [Workflow document](/specs/ci/ci.drawio.png)