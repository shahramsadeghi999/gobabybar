const examData = [
    {
        id: 51,
        topic: "Mixed",
        fp: "Borrow owed Lender $5,000.00. Payment was overdue and Lender retained Ace Inc., to collect the debt. Washington, the President of Ace Inc., assigned Little, an employee of Ace Inc. to collect the account. At the time Washington assigned Little to collect the debt, Washington intended to apply the funds in discharge of a debt to Lender for which Ace Inc. and Washington were jointly liable. Little collected the $5,000.00. The amount collected, less Ace Inc.'s fee, was remitted to Lender by Washington as a payment on the debt for which Ace Inc. and Washington were jointly liable.",
        q: "Did Washington commit a theft crime?",
        opts: [
            "Yes, embezzlement, because Lender's money was entrusted to Ace, Inc.",
            "Yes, obtaining by false pretenses from Borrow, because at the time the funds were collected Washington intended to use them for his own benefit.",
            "Yes, larceny, because at the time the funds were collected Washington intended to use them for his own benefit.",
            "No, because Lender received all of the funds, less Ace, Inc.'s collection fee, that were collected from Borrow."
        ],
        ans: 0,
        exp: "Rule: Embezzlement is the fraudulent conversion of the property of another by a person who is already in lawful possession of that property. Here, Ace, Inc. (and Washington as its chief executive) was lawfully entrusted by Lender with collecting and holding Borrow's funds for Lender's account on that specific debt. Applying those collected funds to pay off a separate personal and corporate debt owed by Washington and Ace, Inc. to Lender constituted a fraudulent conversion of entrusted funds (Option A). Option B is incorrect because Borrow paid an existing valid debt without any misrepresentation of existing fact made to Borrow by Ace. Option C is incorrect because Washington did not commit a trespassory taking; the agency lawfully collected possession. Option D is incorrect because applying funds to satisfy a different obligation without the principal's authorization is an unlawful conversion."
    },
    {
        id: 52,
        topic: "Mixed",
        fp: "Borrow owed Lender $5,000.00. Payment was overdue and Lender retained Ace Inc., to collect the debt. Washington, the President of Ace Inc., assigned Little, an employee of Ace Inc. to collect the account. At the time Washington assigned Little to collect the debt, Washington intended to apply the funds in discharge of a debt to Lender for which Ace Inc. and Washington were jointly liable. Little collected the $5,000.00. The amount collected, less Ace Inc.'s fee, was remitted to Lender by Washington as a payment on the debt for which Ace Inc. and Washington were jointly liable.",
        q: "If a crime was committed by Washington, could Ace, Inc. be convicted for the same offense?",
        opts: [
            "Yes, because Washington was President of Ace, Inc.",
            "No, unless Washington is also convicted for the same offense.",
            "No, because a corporation can not be imprisoned.",
            "No, if the crime involved requires a specific intent."
        ],
        ans: 0,
        exp: "Rule: Under modern principles of corporate criminal liability (and the Model Penal Code), a corporation may be convicted of a criminal offense committed on its behalf by a high managerial agent (such as a corporate president, director, or managing officer) acting within the scope of their employment or apparent authority. Because Washington was the President of Ace, Inc. and committed the crime in the scope of corporate business to benefit the corporation, the corporation is criminally liable (Option A). Option B is incorrect because corporate liability does not depend on the simultaneous conviction of the individual officer. Option C is incorrect because corporations can be punished through fines and forfeiture even though they cannot be imprisoned. Option D is incorrect because specific intent can be imputed to a corporation through the mens rea of its managing officers."
    },
    {
        id: 53,
        topic: "Mixed",
        fp: "Diane obtained the services of a tax accountant to prepare her Federal Income Tax Return. The tax accountant told Diane that a certain expense she had incurred was deductible from income. The tax accountant knew the advice was erroneous. Diane signed and filed her Federal Income Tax Return, claiming the deduction.",
        q: "If Diane is prosecuted for willful attempt to evade payment of taxes, does the tax accountant's advice constitute a valid defense?",
        opts: [
            "No, because the tax accountant knew his advice was wrong.",
            "No, because Diane signed and filed the Federal Income Tax Return.",
            "Yes, because the tax accountant prepared the Federal Income Tax Return.",
            "Yes, if Diane reasonably and in good faith relied on the tax accountant's advice."
        ],
        ans: 3,
        exp: "Rule: Crimes requiring a 'willful' mental state or specific fraudulent intent (such as criminal tax evasion) are negated if the defendant acted in good faith with an honest misunderstanding of the law. Good-faith, reasonable reliance on the expert advice of a competent professional (such as a tax attorney or certified accountant) whom the defendant believed was correct negates the mens rea of willfulness (Cheek v. United States) (Option D). Option A is incorrect because the accountant's subjective bad faith is not imputed to the taxpayer who reasonably relied upon the advice. Option B is incorrect because signing the return under penalty of perjury does not establish willfulness if done in good-faith reliance on expert guidance. Option C is incorrect because reliance must be in good faith and reasonable, not automatic merely because an accountant drafted it."
    },
    {
        id: 54,
        topic: "Mixed",
        fp: "Motorist saw Strange, apparently disabled by illness or injury, lying on the sidewalk late at night. Motorist drove to a service station across the street to use the pay phone. Tell was using the phone and refused to hang up when Motorist explained the circumstances. There was no other phone in the vicinity. Motorist then drew a loaded revolver and threatened to shoot Tell unless he hung up. Tell then hung up and permitted Motorist to use the phone. Motorist is now being prosecuted for assault with a deadly weapon.",
        q: "Did Motorist have a privilege to threaten Tell with a revolver?",
        opts: [
            "Yes, because Motorist was privileged to use deadly force if necessary to save Strange's life.",
            "Yes, because Motorist was privileged to threaten the use of deadly force if reasonably necessary to save Strange's life.",
            "No, unless there was a statute specifically granting such a privilege.",
            "No, if Motorist did not know Strange."
        ],
        ans: 1,
        exp: "Rule: Under the defense of necessity and defense of others, an actor is privileged to take reasonable emergency measures to prevent serious injury or death to another person. While the actual application of deadly force against an innocent non-aggressor is strictly prohibited under necessity, a conditional or verbal threat of force (even displaying a weapon) to secure an indispensable instrument to preserve human life may be recognized as privileged where the emergency is acute, no other means exist, and the threatened force was not actually deployed (Option B, conforming to the official State Bar key). Option A is incorrect because actual use of deadly force against an innocent person is never permitted under necessity. Option C is incorrect because defense privileges are established by common law. Option D is incorrect because defense of third parties does not require a prior familial or personal relationship."
    },
    {
        id: 55,
        topic: "Mixed",
        fp: "Barney owned a hardware store in New York. Wishing to move to a warmer climate, he entered into a written contract to buy Sampson's hardware store in Florida. The contract stated that Barney would buy Sampson's store for $125,000 'provided Barney finds a purchaser who will buy his present business for $100,000 cash.' Sampson rents the building in which his store is located, under a lease with one more year to run.\n\nAssume Sampson repudiated the contract soon after signing it and before Barney had made any effort to find a buyer for his present business. Barney sued Sampson for breach of contract and Sampson defended on the ground that his promise to sell was unsupported by consideration.",
        q: "Will this defense succeed?",
        opts: [
            "Yes, because Barney's promise to buy was subject to a condition within Barney's complete control and was therefore illusory.",
            "Yes, because Barney's promise to buy was still executory.",
            "No, because the court will interpret the condition of Barney's promise as requiring Barney to make a good faith effort to find a buyer for his present business.",
            "No, because Barney's promise to sell his present business was consideration for Sampson's promise to sell his business to Barney."
        ],
        ans: 2,
        exp: "Rule: A contract conditioned on the occurrence of an event within the control of one party (such as obtaining financing or selling an existing business) is not illusory because the law implies an obligation of good faith and reasonable efforts to bring about the condition (Restatement (Second) of Contracts § 205). Because Barney was under an implied duty of good faith to attempt to sell his New York store, his promise was not illusory and constituted valid consideration (Option C). Option A is incorrect because the implied covenant of good faith supplies the necessary mutuality of obligation. Option B is incorrect because executory promises are standard, valid consideration. Option D is incorrect because the sale of Barney's business was a condition precedent, not an independent promise made to Sampson."
    },
    {
        id: 56,
        topic: "Mixed",
        fp: "Barney owned a hardware store in New York. Wishing to move to a warmer climate, he entered into a written contract to buy Sampson's hardware store in Florida. The contract stated that Barney would buy Sampson's store for $125,000 'provided Barney finds a purchaser who will buy his present business for $100,000 cash.' Sampson rents the building in which his store is located, under a lease with one more year to run.\n\nAssume Barney made no effort to find a buyer for his present business and refused to perform his promise to buy Sampson's business. Sampson sued Barney and the evidence shows that Barney could have found a purchaser to buy his business for $100,000 cash.",
        q: "What result?",
        opts: [
            "Sampson wins, because the condition of Barney's promise was excused by Barney's failure to try to make it occur.",
            "Sampson wins, because the stipulation about the sale of Barney's present business was a mere promise and not a condition.",
            "Barney wins, because the condition of Barney's promise to buy Sampson's business did not occur.",
            "Barney wins, because he made no promise to try to find a buyer for his business."
        ],
        ans: 0,
        exp: "Rule: Under the doctrine of prevention (excuse of condition by bad faith or non-cooperation), if a promisor's duty is subject to a condition precedent, and the promisor wrongfully prevents or hinders the occurrence of the condition in breach of their implied duty of good faith, the condition is excused and the duty becomes unconditional. Because Barney made no effort to find a buyer, and evidence showed a willing buyer was obtainable for $100,000, Barney's non-cooperation excused the condition precedent (Option A). Option B is incorrect because the clause 'provided that' explicitly creates an express condition. Options C and D are incorrect because a party cannot rely on the non-occurrence of a condition that their own breach of good faith caused to fail."
    },
    {
        id: 57,
        topic: "Mixed",
        fp: "Barney owned a hardware store in New York. Wishing to move to a warmer climate, he entered into a written contract to buy Sampson's hardware store in Florida. The contract stated that Barney would buy Sampson's store for $125,000 'provided Barney finds a purchaser who will buy his present business for $100,000 cash.' Sampson rents the building in which his store is located, under a lease with one more year to run.\n\nAssume Barney refused to perform his promise to buy Sampson's business and Sampson sued. Barney defended on the ground that at the time the contract was signed the parties orally agreed that Barney's obligation to buy was conditioned upon Barney's obtaining a 5-year extension of Sampson's lease, and that Barney has been unsuccessful in his efforts to obtain such an extension from the landlord. No mention of the lease was made in the contract. Sampson objected to the admission of evidence to prove such a condition on the ground of the Parol Evidence Rule.",
        q: "Which of the following arguments that Barney might make has any chance of avoiding the Parol Evidence Rule?",
        opts: [
            "The evidence is offered to clear up an ambiguity in the writing.",
            "The evidence is offered to show a modification of a written contract.",
            "The writing was not an 'integrated' written contract.",
            "The Parol Evidence Rule does not bar evidence of the oral agreement because the evidence is offered to establish an oral condition of a promise contained in an 'integrated' written contract."
        ],
        ans: 2,
        exp: "Rule: The Parol Evidence Rule applies only if the writing is an 'integrated' agreement (intended by the parties as a final expression of their agreement). Therefore, a party seeking to introduce prior or contemporaneous oral agreements can avoid the Parol Evidence Rule altogether by establishing that the written instrument was never intended as a final, integrated contract (Option C). Option A is incorrect because there is no ambiguous language in the text to interpret; Barney is seeking to add a completely new term. Option B is incorrect because subsequent modifications are not barred by the rule, but Barney is offering a contemporaneous oral agreement, not a subsequent modification. Option D is incorrect because while oral conditions precedent to contract *effectiveness* are admissible, an oral condition that directly contradicts or adds to specific terms of an integrated writing is barred."
    },
    {
        id: 58,
        topic: "Mixed",
        fp: "Al lived in a home adjacent to a large stretch of open fields. One afternoon Al took his dog, on leash, for a walk across the fields. Unknown to Al, Burt was engaging in target practice with a revolver that Burt owned. Burt was hidden from Al's view by a small clump of trees. As Al, with his dog, passed the clump of trees, Burt fired at a target that he had pinned up to one of the trees. The sound of the explosion frightened Al's dog, which broke the leash and ran. The dog then bit Charles who was walking in the fields about 100 feet from Al.",
        q: "If Charles asserts a claim for damages against Al, will Charles prevail?",
        opts: [
            "Yes, because Al owned the dog.",
            "Yes, because the dog escaped from Al's control.",
            "No, unless the dog had previously bitten some other person.",
            "No, unless Al was negligent in not restraining the dog."
        ],
        ans: 3,
        exp: "Rule: Under general common law, an owner of a domestic animal is not strictly liable for injuries caused by the animal unless the owner had scienter (actual knowledge or reason to know) of the animal's abnormally dangerous propensities ('one-bite rule'). In the absence of scienter or strict liability, an owner is liable only if they were negligent in controlling or restraining the animal under the circumstances. Charles can prevail against Al only if Al failed to exercise reasonable care (Option D). Option A is incorrect because dog ownership does not create strict liability at common law without scienter. Option B is incorrect because mere escape does not establish negligence or strict liability. Option C is incorrect because scienter can be established by aggressive behavior short of an actual prior bite, and negligence remains an independent ground of liability."
    },
    {
        id: 59,
        topic: "Mixed",
        fp: "Al lived in a home adjacent to a large stretch of open fields. One afternoon Al took his dog, on leash, for a walk across the fields. Unknown to Al, Burt was engaging in target practice with a revolver that Burt owned. Burt was hidden from Al's view by a small clump of trees. As Al, with his dog, passed the clump of trees, Burt fired at a target that he had pinned up to one of the trees. The sound of the explosion frightened Al's dog, which broke the leash and ran. The dog then bit Charles who was walking in the fields about 100 feet from Al.",
        q: "If Charles asserts a claim against Burt for damages for the dog bite, will Charles prevail?",
        opts: [
            "Yes, because Burt's firing the gun caused the dog to run away.",
            "Yes, because firing a gun is an abnormally dangerous activity.",
            "No, because injury to Charles from a dogbite was not a foreseeable consequence of Burt's act.",
            "No, because the breaking of the leash was an independent, intervening force."
        ],
        ans: 2,
        exp: "Rule: Proximate (legal) cause requires that the injury suffered by the plaintiff be within the foreseeable scope of the risk created by the defendant's conduct (Palsgraf). Firing a gun on target practice in an open field might foreseeably create risks of gunshot wounds or shrapnel injuries, but a frightened domestic dog breaking its leash and biting an unrelated passerby 100 feet away is an unforeseeable consequence outside the scope of risk created by the gunfire (Option C). Option A is incorrect because cause-in-fact ('but-for' cause) does not establish proximate cause without foreseeability. Option B is incorrect because target shooting in an open rural area is not classified as an abnormally dangerous activity imposing strict liability. Option D is incorrect because intervening forces do not automatically relieve a defendant if they were foreseeable."
    },
    {
        id: 60,
        topic: "Mixed",
        fp: "Joe and Tom saw a new automobile, owned by Bill, parked on a street. They decided to take the automobile for a joyride. Joe drove the automobile a few blocks before colliding with a truck. The collision totally destroyed Bill's automobile.",
        q: "If Bill obtains a judgment against Joe based on conversion and Joe pays the judgment, may Joe compel Tom to reimburse him for any part of the amount paid to Bill?",
        opts: [
            "Yes, on a theory of implied indemnity.",
            "Yes, because Tom was a joint tort-feasor.",
            "No, unless Bill had joined Tom as a party defendant in the action.",
            "No, because Bill's judgment was based on conversion."
        ],
        ans: 3,
        exp: "Rule: Under traditional common law rules governing joint tortfeasors (as specified in the exam instructions), contribution is not permitted among intentional tortfeasors. Because conversion is an intentional tort, a joint intentional tortfeasor who satisfies a judgment cannot seek contribution or reimbursement from an accomplice (Merryweather v. Nixan) (Option D). Option A is incorrect because indemnity shifts 100% of the loss only to a party primarily responsible when the paying party was purely vicariously liable or without fault, which is not true of Joe. Option B is incorrect because the traditional common law rule bars contribution among joint intentional tortfeasors. Option C is incorrect because joinder in the original suit does not alter the substantive rule barring contribution for intentional torts."
    },
    {
        id: 61,
        topic: "Mixed",
        fp: "Tom is a teacher who is quite knowledgeable about coins and their value and his collection is worth thousands of dollars. Tom also buys and sells coins. Jim, who had no prior experience with coins, had inherited a sizeable coin collection. Jim opened 'Coin Shop' in a local shopping center.\n\nAssume that on June 1 Jim advertised in the local newspaper as follows: 'Special sale. Coins on sale at 10% over their face value.' In response to this ad, Tom visited Jim's shop and saw in a display case a fifty cent coin which Tom recognized as having a value of $100. Tom tendered fifty-five cents to Jim but Jim refused to sell the coin. Jim said that the coin had already been sold to Zeke for $100 prior to the start of the special sale and that Jim had forgotten to remove it from the display case.\n\nTom sued Jim for damages.",
        q: "What result?",
        opts: [
            "Jim wins because the ad was not an offer.",
            "Jim wins because fifty-five cents was not sufficient consideration for a coin worth $100.",
            "Tom wins because, in visiting Jim's shop, Tom detrimentally relied on the ad.",
            "Tom wins because Jim's ad was an offer which Tom accepted when he tendered the fifty-five cents to purchase the coin."
        ],
        ans: 0,
        exp: "Rule: Commercial advertisements published in newspapers or circulars are generally construed as mere invitations to deal or solicitations of offers, rather than binding operative offers. An advertisement constitutes an offer only if it is clear, definite, explicit, and leaves nothing open to negotiation (e.g., 'first come, first served' for a specific listed item, as in Lefkowitz). Jim's general newspaper announcement was a non-binding solicitation, meaning Tom's tender was an offer that Jim was free to reject (Option A). Option B is incorrect because courts do not inquire into the adequacy of consideration; the defect is lack of mutual assent/offer. Option C is incorrect because visiting a store in response to an ad is mere preparation to shop, not detrimental reliance creating an option contract. Option D is incorrect because standard commercial advertisements are not offers."
    },
    {
        id: 62,
        topic: "Mixed",
        fp: "Tom is a teacher who is quite knowledgeable about coins and their value and his collection is worth thousands of dollars. Tom also buys and sells coins. Jim, who had no prior experience with coins, had inherited a sizeable coin collection. Jim opened 'Coin Shop' in a local shopping center.\n\nAssume that Tom telephoned Jim and learned that Jim owned fifty 1937 silver dollars. Jim agreed to sell them to Tom for $1,000, which sum Tom agreed to pay in advance of shipment. Following the conversation, Jim sent Tom this letter: 'This confirms your purchase of the silver dollars. Upon receipt of your check for $1,000 the coins will be shipped to you as agreed. /s/ Jim.' Tom received the letter but did not respond to it and did not pay the $1,000 a month. Coyne sues Tom, who asserts the Statute of Frauds as a defense.",
        q: "Will this defense succeed?",
        opts: [
            "No, because the letter signed by Coyne satisfies the writing requirement against Tom.",
            "No, because the face value of the coins is less than $5,000.",
            "Yes, because Tom is not a merchant and there is no writing signed by Tom.",
            "Yes, because a memorandum signed after the contract is made does not satisfy the Statute of Frauds."
        ],
        ans: 0,
        exp: "Note: In the official California Bar examination key, Question 62 was deemed defective and credited for all choices (A, B, C, D) due to typographical errors in the question prompt (referencing 'Coyne' instead of 'Jim' in the fact pattern and options). Under standard UCC principles: Under UCC § 2-201(2) (Merchant's Confirmatory Memo Exception), between merchants, if one party sends a written confirmation sufficient against the sender within a reasonable time and the recipient does not object within 10 days, it satisfies the Statute of Frauds against the recipient. If both are merchants, Option A would apply; if Tom (a teacher/collector) is not a merchant, Option C would apply. Because the Bar credited all answers, any selection is treated as correct; Option A aligns with the primary text in the official key."
    },
    {
        id: 63,
        topic: "Mixed",
        fp: "Tom is a teacher who is quite knowledgeable about coins and their value and his collection is worth thousands of dollars. Tom also buys and sells coins. Jim, who had no prior experience with coins, had inherited a sizeable coin collection. Jim opened 'Coin Shop' in a local shopping center.\n\nAssume the same facts as in question 62, but that Tom defends on the ground that there was no consideration for his promise to pay $1,000.",
        q: "Will this defense succeed?",
        opts: [
            "Yes, because a court will not enforce a promise to pay $1,000 for coins with a face value of $50.",
            "Yes, because Coyne did not change his position in reliance on the promise of Tom to pay $1,000.",
            "No, because Coyne's promise to sell the coins was sufficient consideration.",
            "No, because both Tom and Coyne are merchants and contracts between merchants do not require consideration."
        ],
        ans: 2,
        exp: "Note: Like Question 62, Question 63 inherited the typographical party error ('Coyne' vs 'Jim') and was credited for all answers (A, B, C, D) in the official Bar key. Substantively: A bilateral contract is supported by mutual consideration consisting of bargained-for exchange of promises. Jim/Coyne's promise to transfer and deliver the fifty 1937 silver dollars constitutes valid consideration for Tom's promise to pay $1,000 (Option C). Option A is incorrect because face value does not dictate market consideration for collectibles; courts do not assess adequacy. Option B is incorrect because consideration exists in the mutual promises, making reliance unnecessary. Option D is incorrect because merchant contracts still require consideration."
    },
    {
        id: 64,
        topic: "Mixed",
        fp: "Tom is a teacher who is quite knowledgeable about coins and their value and his collection is worth thousands of dollars. Tom also buys and sells coins. Jim, who had no prior experience with coins, had inherited a sizeable coin collection. Jim opened 'Coin Shop' in a local shopping center.\n\nAssume that Tom and Coyne had entered into an enforceable contract for the sale of fifty 1937 silver dollars but that before the coins were delivered to Tom, the government made the transfer of pre-1964 silver coins illegal.",
        q: "Which of the following is a correct statement of the rights of Tom and Coyne?",
        opts: [
            "The court will not enforce the agreement and will leave the parties as they are, enabling Coyne to keep the $1,000.",
            "Coyne is in breach and must pay damages, even though he is excused from delivering the coins.",
            "Coyne may keep the $1,000 and need not deliver the coins, because merchants should anticipate changes in the law.",
            "Coyne is excused from delivering the coins, and Tom is entitled to restitution of the $1,000."
        ],
        ans: 3,
        exp: "Note: Question 64 was credited for all answers (A, B, C, D) by the State Bar due to the ongoing 'Coyne' drafting confusion. Substantively: Under the doctrine of supervening illegality / objective impossibility (Restatement (Second) of Contracts § 264), when a governmental regulation or statute makes performance illegal after formation, the promisor's duty to perform is discharged. When a party's duty is discharged by impossibility/illegality, any performance or advance payment rendered by the other party must be refunded under principles of restitution to prevent unjust enrichment (Option D). Option A is incorrect because supervening illegality is an excuse doctrine, not an illegal pact ab initio where the court leaves parties in pari delicto. Options B and C are incorrect because excusing performance simultaneously precludes breach liability and mandates return of unearned prepayments."
    },
    {
        id: 65,
        topic: "Mixed",
        fp: "Agent was an undercover police officer. Agent received information from a reliable source that Deft, recently released from prison after serving a sentence for selling narcotics, was again selling narcotics, but that he was being very cautious and would sell only to persons who knew a certain code word. Agent's source told Agent the current code word.\n\nAgent approached Deft, offered to make a buy of narcotics and said the code word. Deft agreed to the sale and to the time and place of delivery. When Deft appeared with the narcotics he was arrested.",
        q: "If Deft claims that he was entrapped, will he prevail on this issue?",
        opts: [
            "Yes, because Deft would not have made the sale if Agent had not said the code word.",
            "Yes, because Agent approached Deft and offered to make a buy.",
            "No, because Deft was already predisposed to sell narcotics.",
            "No, because Deft had previously been convicted for selling narcotics."
        ],
        ans: 2,
        exp: "Rule: Under the majority subjective test for entrapment, the defense is established only if (1) the criminal design originated with government agents, and (2) the defendant had no predisposition to commit the crime. Where law enforcement merely affords an opportunity or facility for the commission of an offense to a person who is already ready, willing, and predisposed to commit it, there is no entrapment (Option C). Option A is incorrect because using a pre-existing criminal code word is merely providing an opportunity. Option B is incorrect because undercover solicitations do not constitute entrapment without improper coercion or inducement. Option D is incorrect because a past conviction is evidence of predisposition, but not a per se conclusive bar to raising the defense."
    },
    {
        id: 66,
        topic: "Mixed",
        fp: "Pete parked his car in a garage operated by Dunn. When Pete returned several hours later and demanded his car, Dunn could not produce the car because it had been stolen by a thief.",
        q: "If Pete asserts a claim against Dunn based on conversion, will Pete prevail?",
        opts: [
            "Yes, because Dunn could not produce Pete's car.",
            "Yes, unless Pete recovers his car undamaged.",
            "No, if Dunn did not intentionally give custody of the car to the thief.",
            "No, if Dunn had taken reasonable security precautions to prevent theft of parked cars."
        ],
        ans: 0,
        exp: "Rule: At common law, when a bailee fails to redeliver the bailed property upon the bailor's demand, a presumption of conversion arises. Under the traditional common law rule reflected in the official Bar key, the absolute refusal or total failure of a commercial bailee to deliver bailed property to the owner upon demand sustains a prima facie action for conversion (Option A). Option B is incorrect because recovery of the vehicle would only mitigate damages, not eliminate an established conversion claim. Option C reflects modern minority trends requiring an intentional wrongful delivery, but does not override the common law rule on non-delivery upon demand. Option D concerns ordinary negligence in bailment rather than the strict property remedy of conversion."
    },
    {
        id: 67,
        topic: "Mixed",
        fp: "Deft, while walking down a city street, found a wallet. Deft picked up the wallet and examined it. He found a driver's license giving the owner's name and address. However, Deft believed that the law was 'finders keepers' and he took out the cash in the wallet, put it in his pocket and tossed the wallet into the trash can.",
        q: "Did Deft commit a theft crime?",
        opts: [
            "Yes, larceny, because Deft kept the money knowing the owner's identity.",
            "Yes, embezzlement, because Deft had rightful possession when he formed the intent to keep the money.",
            "No, because Deft did not commit a trespassory taking.",
            "No, because, as a finder, he was entitled to keep the money."
        ],
        ans: 0,
        exp: "Rule: Larceny of lost property occurs when a finder (1) takes possession of lost or mislaid property, (2) at the time of taking has a clue or immediate knowledge as to the true owner's identity, and (3) forms the concurrent intent to permanently deprive the owner of the property. Because Deft found a driver's license containing the owner's identity and immediately decided to keep the cash and discard the wallet, Deft committed larceny (Option A). (Note: A good-faith mistake of property law can negate felonious intent, but 'finders keepers' is an unreasonable layman's myth that does not constitute a recognized bona fide claim of right where the owner's identity is known). Option B is incorrect because a finder does not obtain lawful bailee possession when they immediately intend to steal. Option C is incorrect because appropriating lost property with known clues to ownership is treated as a trespassory taking. Option D is incorrect because a finder has no right to keep property when the true owner is identifiable."
    },
    {
        id: 68,
        topic: "Mixed",
        fp: "Child, a four year old boy, accompanied Mother to Store. While Mother was shopping in Store, Child wandered away. Child's hand was caught in an opening between the floor and an escalator in Store. The escalator had been installed and designed and was maintained by Esco. When Child's hand was caught, he cried out and Walker, an employee of Store, attempted to stop the escalator before Child was injured. Walker was unable to do so and, as a result, Child's hand was severely injured.\n\nChild, by an appropriate legal representative, has asserted claims against Store and Esco.\n\nIf the escalator was properly installed, designed and maintained by Esco, will Child prevail against Store?",
        q: "Will Child prevail against Store?",
        opts: [
            "Yes, because Store had a non-delegable duty to make the escalator safe.",
            "Yes, if Child was a business invitee when he accompanied Mother in Store.",
            "No, unless Walker failed to exercise reasonable care in rescuing Child.",
            "No, because Mother had the primary duty to supervise Child."
        ],
        ans: 2,
        exp: "Rule: A business proprietor owes invitees a duty of reasonable care to keep the premises reasonably safe. If the escalator was properly designed, installed, and maintained, there was no dangerous defect or condition of the property for which Store was at fault. Once an accident occurs without prior business fault, a business owner has a duty to provide reasonable aid to injured invitees on its premises; therefore, Store can be held liable only if its employee (Walker) acted negligently during the rescue attempt (Option C). Option A is incorrect because a non-delegable duty to maintain safe premises is fully satisfied where the escalator was conceded to be properly installed, designed, and maintained. Option B is incorrect because invitee status establishes a duty of reasonable care, not strict liability. Option D is incorrect because parental negligence is not imputed to a minor child to bar the child's own tort claim."
    },
    {
        id: 69,
        topic: "Mixed",
        fp: "Child, a four year old boy, accompanied Mother to Store. While Mother was shopping in Store, Child wandered away. Child's hand was caught in an opening between the floor and an escalator in Store. The escalator had been installed and designed and was maintained by Esco. When Child's hand was caught, he cried out and Walker, an employee of Store, attempted to stop the escalator before Child was injured. Walker was unable to do so and, as a result, Child's hand was severely injured.\n\nChild, by an appropriate legal representative, has asserted claims against Store and Esco.",
        q: "If Walker was unable to stop the escalator because the stop button was improperly designed, will Child prevail against Esco on a claim based on\nI. Negligence\nII. Strict liability for defective product\nIII. Strict liability for abnormally dangerous activity",
        opts: [
            "I only.",
            "I and II, but not III.",
            "II only.",
            "II and III, but not I."
        ],
        ans: 1,
        exp: "Rule: A commercial manufacturer/designer of machinery is liable under Negligence (I) for failing to exercise reasonable care in designing safety mechanisms, and under Strict Products Liability (II) for placing a defectively designed, unreasonably dangerous product into the stream of commerce. However, operating an escalator is a routine public convenience, not an Abnormally Dangerous Activity (III) that justifies strict liability under Rylands v. Fletcher. Therefore, Child can prevail under theories I and II, but not III (Option B). Options A, C, and D are incorrect because they fail to correctly pair negligence and strict products liability while excluding abnormally dangerous activity."
    },
    {
        id: 70,
        topic: "Mixed",
        fp: "Child, a four year old boy, accompanied Mother to Store. While Mother was shopping in Store, Child wandered away. Child's hand was caught in an opening between the floor and an escalator in Store. The escalator had been installed and designed and was maintained by Esco. When Child's hand was caught, he cried out and Walker, an employee of Store, attempted to stop the escalator before Child was injured. Walker was unable to do so and, as a result, Child's hand was severely injured.\n\nChild, by an appropriate legal representative, has asserted claims against Store and Esco.",
        q: "If Child was a hemophiliac and either Store or Esco is found liable, will Child recover for additional expenses incurred in the treatment of his injuries because of this condition?",
        opts: [
            "Yes, if the additional expenses were reasonable in amount.",
            "Yes, unless the additional expenses were covered by a collateral source.",
            "No, because the hemophilia was a pre-existing condition.",
            "No, if the liability of the defendants was based on strict liability in tort."
        ],
        ans: 0,
        exp: "Rule: Under the 'eggshell skull' (thin skull) plaintiff rule, a tortfeasor takes the victim as they find them. If the defendant's tortious conduct inflicts bodily injury, the defendant is legally liable for all resulting medical consequences and damages, even if an unforeseen pre-existing physical condition or illness (such as hemophilia) causes the harm to be far more extensive than could have been anticipated, provided the medical expenses are reasonable in amount (Option A). Option B is incorrect because under the collateral source rule, payments received from health insurance or third parties do not reduce the tortfeasor's liability. Option C is incorrect because a pre-existing medical condition never bars recovery for aggravated physical damages. Option D is incorrect because the eggshell plaintiff doctrine applies equally to strict products liability and negligence."
    },
    {
        id: 71,
        topic: "Mixed",
        fp: "Child, a four year old boy, accompanied Mother to Store. While Mother was shopping in Store, Child wandered away. Child's hand was caught in an opening between the floor and an escalator in Store. The escalator had been installed and designed and was maintained by Esco. When Child's hand was caught, he cried out and Walker, an employee of Store, attempted to stop the escalator before Child was injured. Walker was unable to do so and, as a result, Child's hand was severely injured.\n\nChild, by an appropriate legal representative, has asserted claims against Store and Esco.",
        q: "If Child obtains a judgment against both Store and Esco, and Store pays the judgment, may Store compel Esco to reimburse it for any part of the amount paid Child?",
        opts: [
            "Yes, because the manufacturer must bear the entire loss caused by its defective product.",
            "Yes, unless Store was actively negligent.",
            "No, unless the jurisdiction permits contribution among tort-feasors.",
            "No, because the plaintiff is entitled to recover against either party."
        ],
        ans: 1,
        exp: "Rule: Under principles of common law indemnity, a party who is held liable for a tort without personal fault (e.g., passive negligence, vicarious liability, or holding title as a retailer/premises owner) is entitled to complete 100% indemnification (reimbursement) from the active creator of the defect (the manufacturer/designer), unless the premises owner was independently and actively negligent (Option B). Option A is incorrect because a manufacturer does not bear 100% indemnity if the premises owner's active negligence contributed to the injury. Option C is incorrect because indemnity shifts the entire loss between active and passive parties regardless of statutes on contribution. Option D is incorrect because joint and several liability between the plaintiff and defendants does not resolve downstream indemnity rights between the co-defendants."
    },
    {
        id: 72,
        topic: "Mixed",
        fp: "Mike, Leo, and Frank, planned to rob the owner of a local liquor store. The understanding was that Mike would supply the guns and ammunition and Leo and Frank would actually commit the robbery. Mike told Leo and Frank that all he wanted was to be paid for the guns and ammunition, that he would have nothing to do with the actual robbery, and would not be present at the time or share in the proceeds. Mike supplied Leo and Frank with guns and ammunition which they used to rob the owner of a liquor store.",
        q: "Can Mike be held criminally liable for the robbery of the owner of the liquor store as\nI. a co-conspirator\nII. an accessory before the fact?",
        opts: [
            "No, neither I nor II.",
            "Yes, I but not II.",
            "Yes, II but not I.",
            "Yes, both I and II."
        ],
        ans: 3,
        exp: "Rule: An individual who enters into an agreement with others to commit a crime is guilty of conspiracy; furthermore, under the Pinkerton doctrine, a co-conspirator is criminally liable for all substantive crimes committed by fellow conspirators in furtherance of the conspiracy (I). Additionally, an accessory before the fact is one who aids, counsels, or procures the commission of a felony and is not present when it is committed (II). By agreeing to the plan and supplying the deadly weapons for the robbery, Mike is criminally liable both as a co-conspirator (Pinkerton) and as an accessory before the fact (Option D). Options A, B, and C are incorrect because Mike satisfies the legal requirements for both modes of derivative liability."
    },
    {
        id: 73,
        topic: "Mixed",
        fp: "In order to get Art in trouble, Bob and Sam threatened him at gunpoint and told him, 'If you do not immediately go into the bank and hold it up we will kill you.' Bob and Sam then positioned themselves so they could observe Art's conduct of the robbery. They gave Art a gun with one bullet. Art entered the bank and pointed the gun at a teller. Before Art received any money he saw that the bank guard was about to shoot him, and Art dropped his gun and held up his hands in surrender.",
        q: "Did Art commit the crime of attempted robbery?",
        opts: [
            "Yes, because Art threatened the use of deadly force.",
            "Yes, because he took a substantial step towards the completion of the robbery.",
            "No, because he surrendered before the robbery was completed.",
            "No, because Art was threatened with the loss of his own life."
        ],
        ans: 3,
        exp: "Rule: Duress is an affirmative defense to all non-homicide crimes where the defendant engaged in the criminal conduct because they were coerced to do so by the threat of imminent death or serious bodily injury, and a person of reasonable firmness would have been unable to resist. Because Bob and Sam coerced Art at gunpoint with immediate loss of life and maintained continuous observation over him, Art acted under duress, which completely excuses attempted robbery (Option D). Options A and B are incorrect because, although pointing a gun is an actus reus, duress provides a complete defense. Option C is incorrect because common law attempt does not recognize abandonment or surrender as a defense once a substantial step/overt act has been committed."
    },
    {
        id: 74,
        topic: "Mixed",
        fp: "Lou went to the bank to close his account. The balance in the account was $50. Lou handed his passbook to the teller. The teller, misreading the figure in the passbook and in a computer printout purporting to show the balance in Lou's account, said 'Your balance is $500.00; here is the $500.00.' The teller gave Lou five $100.00 bills. Lou was aware of the mistake but said nothing and left the bank with the $500.00.",
        q: "Did Lou commit the crime of obtaining property by false pretenses?",
        opts: [
            "Yes, because he had a duty to notify the teller of the mistake.",
            "Yes, because his failure to notify the teller of the mistake amounted to a false misrepresentation of an existing fact.",
            "No, because he made no misrepresentation.",
            "No, because he did not get title to the money."
        ],
        ans: 2,
        exp: "Rule: The crime of obtaining property by false pretenses requires (1) obtaining title to the property of another, (2) by an intentional or knowing false representation of a past or existing fact, (3) with the intent to defraud. Mere passive nondisclosure or silence does not constitute a false representation unless there is an affirmative fiduciary duty or active fraudulent inducement. Because Lou made no statement, representation, or misstatement of fact, he did not commit false pretenses (Option C). (Note: Taking money with knowledge of a unilateral counting/calculation mistake constitutes common law larceny, but the specific question asks only about false pretenses). Options A and B are incorrect because common law false pretenses requires an affirmative misrepresentation, not mere silence during an autonomous teller error. Option D is incorrect because the bank teller intended to pass title to the cash, which is why larceny vs. false pretenses turns on the lack of affirmative misrepresentation."
    },
    {
        id: 75,
        topic: "Mixed",
        fp: "In 1979, County enacted a valid ordinance requiring that within one year from the date of enactment, all billboards had to be removed from property not zoned for commercial use. The ordinance provided for compensation to owners of billboards that were removed. Adco maintained billboards on property in a rural area zoned exclusively for home use. Paul purchased a lot in the area. One of Adco's billboards blocked the view of a nearby lake from Paul's lot. Paul anticipated that the billboard would soon be removed and made plans to erect a modern ranch house on his lot. At the expiration of the one-year period Adco had not removed the billboard.",
        q: "If Paul asserts a claim against Adco, based on nuisance, will Paul prevail?",
        opts: [
            "No, because Paul knew the billboard existed when he purchased his lot.",
            "No, because only the public authorities can assert a claim based on violation of the ordinance.",
            "Yes, because the continued maintenance of the billboard violates the ordinance.",
            "Yes, because Paul will suffer special harm from the continued maintenance of the billboard."
        ],
        ans: 3,
        exp: "Rule: A public nuisance is an unreasonable interference with a right common to the general public (such as violating a public zoning billboard ordinance). A private citizen has standing to maintain a private action for public nuisance only if they suffer 'special injury'—harm of a different kind, not merely degree, from that suffered by the general public. Blocking the specific view and enjoyment of a lake from Paul's unique parcel constitutes particularized special harm sufficient to confer standing to abate the nuisance (Option D). Option A is incorrect because 'coming to the nuisance' is not an absolute defense. Option B is incorrect because a private plaintiff suffering special harm may maintain an action. Option C is incorrect because a statutory/ordinance violation creates a public nuisance, but a private individual must still plead special harm."
    }
];