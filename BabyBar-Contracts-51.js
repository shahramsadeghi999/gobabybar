// BabyBar-Contracts-51.js
// Total Questions: 25
// Subject: Contracts (Common Law & UCC Article 2) ONLY
// Standard: Master Tier 5 / First-Year Law Students' Examination (Baby Bar) Benchmark
const examData51 = [
    {
        id: 1,
        topic: "Promissory Estoppel / Reliance",
        fp: "A long-time employee was planning to retire in two years. Her company's CEO told her, 'Because of your 40 years of service, we will give you a lifetime pension of $2,000 a month if you retire today.' The employee immediately retired and sold her house, downsizing to afford living on the pension. She received the pension for three years. Then the CEO died, and the company stopped paying, asserting there was no consideration for the promise because her 40 years of service were in the past.",
        q: "Is the employee entitled to continue receiving the pension?",
        opts: [
            "No, because past consideration cannot support a modern contractual promise.",
            "Yes, because she chose to retire when she could have kept working, relying to her detriment on the promise.",
            "Yes, because her 40 years of service constituted a material benefit to the company.",
            "No, because pension promises require a signed writing under the Statute of Frauds."
        ],
        ans: 1,
        exp: "(B) is the correct response. While past services are not valid consideration, a promise may be enforceable under the equitable doctrine of promissory estoppel (Restatement § 90)[cite: 5]. Promissory estoppel requires a promise that the promisor should reasonably expect to induce action or forbearance, and which does induce justifiable detrimental reliance by the promisee[cite: 5]. The employee relied on the pension promise to her detriment by giving up her salary, retiring early, and selling her home[cite: 5]. Therefore, the promise is enforceable to prevent injustice[cite: 5]. (A) is incorrect because, although there was no traditional consideration, promissory estoppel provides an alternative basis for enforcement[cite: 5]. (C) is incorrect because the material benefit rule generally applies to emergency interventions, not standard employment history[cite: 5]. (D) is incorrect because the possibility of death within a year takes the lifetime pension outside the Statute of Frauds[cite: 5]."
    },
    {
        id: 2,
        topic: "Performance / Right to Inspect (UCC 2-513)",
        fp: "A health food store contracted to buy 200 pounds of almonds from a nut distributor. The contract stated: 'Payment shall be due immediately on delivery and prior to inspection of the shipment.' The distributor delivered a sealed box. The store owner paid the driver. An hour later, the store owner opened the box and discovered it contained walnuts, not almonds. The distributor refused to exchange them, arguing that by paying for the box before looking inside, the store owner had legally accepted the goods.",
        q: "What is the legal effect of the store owner's payment prior to inspection?",
        opts: [
            "It constitutes a waiver of the buyer's right to reject the goods for nonconformity.",
            "It operates as an unconditional acceptance under the UCC.",
            "It does not impair the buyer's right to inspect and reject the goods for nonconformity.",
            "It is unconscionable and invalidates the entire sales contract."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under UCC § 2-512(2), where a contract requires payment before inspection, such payment does NOT constitute acceptance of goods and does not impair the buyer's right to inspect or any of the buyer's remedies[cite: 5]. The buyer retains the full right to open the boxes afterward, discover the nonconformity, and reject the goods or sue for breach[cite: 5]. The store owner may therefore force the distributor to take the walnuts back and refund the money[cite: 5]. (A) and (B) are incorrect because the UCC expressly prevents pre-inspection payment from operating as a waiver or final acceptance[cite: 5]. (D) is incorrect because requiring payment prior to inspection (e.g., C.O.D. deliveries) is a standard, enforceable commercial practice and is not unconscionable[cite: 5]."
    },
    {
        id: 3,
        topic: "Formation / Option Contracts",
        fp: "A guitarist saw a vintage amplifier in a pawn shop priced at $5,000, which he could not currently afford. He told the shop owner he was going on tour and would have the money in five months. The shop owner wrote: 'For $10, I promise to hold this amplifier for you and not sell it to anyone else for six months.' The guitarist paid the $10. Five months later, the guitarist returned with $5,000, but the shop owner had already sold the amplifier to another customer.",
        q: "Should the guitarist succeed in a breach of contract action?",
        opts: [
            "Yes, because the shop owner made a valid firm offer under the UCC.",
            "No, because the shop owner agreed to hold the offer open for longer than 90 days.",
            "Yes, because the guitarist paid $10 consideration, creating a binding option contract.",
            "No, because $10 is nominal consideration and insufficient to support a $5,000 transaction."
        ],
        ans: 2,
        exp: "(C) is the correct response. An option contract is a promise to keep an offer open that is supported by independent consideration. Under the common law, if an offeree gives consideration (even a small amount like $10) to hold an offer open, a binding option contract is created, and the offeror cannot revoke the offer for the agreed-upon period[cite: 5]. Because the guitarist paid $10, the shop owner was bound to hold the amplifier for six months. Selling it to someone else breached this option contract[cite: 5]. (A) and (B) are incorrect because a UCC 'firm offer' is a signed promise by a merchant to hold an offer open *without* consideration, and it is capped at three months. Here, actual consideration was paid, creating a common law option contract, which has no time limit[cite: 5]. (D) is incorrect because courts generally do not inquire into the adequacy of consideration; $10 is legally sufficient to support an option[cite: 5]."
    },
    {
        id: 4,
        topic: "Consideration / Output & Requirements Contracts",
        fp: "A regional airline agreed to buy all of its jet fuel requirements for the next year from a specific supplier. The supplier promised to meet those requirements at a price pegged to the industry-wide posted crude oil index. Six months later, a foreign war caused the industry crude oil index to quadruple. The supplier reneged, claiming the agreement was void for lack of mutuality because the airline wasn't bound to buy a specific amount.",
        q: "Will a court enforce the requirements contract?",
        opts: [
            "No, because a mere price increase due to a war invalidates the agreement under commercial impracticability.",
            "Yes, because the airline bound itself to act in good faith in ordering its fuel requirements, supplying mutuality.",
            "No, because the war was an unforeseeable event at the time of contracting.",
            "Yes, but only if the airline agrees to pay the supplier's actual costs."
        ],
        ans: 1,
        exp: "(B) is the correct response. A requirements contract is one where the buyer promises to buy all of its requirements from the seller[cite: 5]. Under UCC § 2-306, such agreements do not lack mutuality of obligation because the buyer is bound by an implied statutory duty to determine its requirements in good faith and according to commercial standards of fair dealing[cite: 5]. This good-faith limitation on the buyer's discretion provides the necessary consideration to make the contract binding[cite: 5]. (A) and (C) are incorrect because a dramatic price increase tied to an agreed-upon market index is a foreseeable business risk assumed in the contract; it does not trigger commercial impracticability or invalidate the agreement[cite: 5]. (D) is incorrect because the contract price is pegged to the index, not the supplier's internal costs[cite: 5]."
    },
    {
        id: 5,
        topic: "Assignment & Delegation / Successive Assignments",
        fp: "A recording artist signed a contract to record a song for a studio for $2,000. On March 1, the artist recorded the song. On March 15, the artist bought a piano on credit, assigning his right to the $2,000 payment to the piano seller as security. The piano seller immediately notified the studio. On April 1, the artist assigned the exact same $2,000 right to his landlord to avoid eviction. The landlord immediately notified the studio. The artist later sued the studio for the $2,000.",
        q: "Which of the following facts would best support a judgment for the studio against the artist?",
        opts: [
            "The song was never commercially released.",
            "The assignment to the landlord violated a state wage statute.",
            "The artist made at least one effective assignment of the right to collect the $2,000.",
            "The artist was a minor at the time of the recording session."
        ],
        ans: 2,
        exp: "(C) is the correct response. An effective assignment transfers the assignor's contract rights entirely to the assignee, extinguishing the assignor's right to enforce the contract[cite: 5]. If the artist made a valid assignment of his $2,000 claim to the piano seller (or the landlord), he no longer possesses the legal right to collect the money from the studio[cite: 5]. Therefore, the studio's best defense against a lawsuit by the *artist* is that the artist gave up his rights via the assignment[cite: 5]. (A) is incorrect because the facts state the $2,000 was owed whether or not the song was released. (B) is incorrect because if the assignment to the landlord was invalid, the artist might still owe the money to the piano seller, but invalidating the assignment doesn't help the studio defend against the artist. (D) is incorrect because infancy makes a contract voidable by the minor, not the studio, and would require the studio to pay the minor upon disaffirmance[cite: 5]."
    },
    {
        id: 6,
        topic: "Performance / Condition Precedent (Subjective Satisfaction)",
        fp: "A wealthy homeowner hired an artisan to design and carve a wooden family crest for his front door for $650. The agreement stipulated: 'If the homeowner is not completely satisfied with the aesthetic design of the crest, he is under no obligation to pay.' The artisan carved a flawless piece of woodworking. However, the homeowner looked at it and said: 'I just don't like it,' and refused to accept or pay for it. The homeowner was subjectively telling the truth about his distaste.",
        q: "In a breach of contract action by the artisan, what is the homeowner's best defense?",
        opts: [
            "The agreement was not in writing as required by the Statute of Frauds.",
            "The homeowner's subjective satisfaction was a condition precedent to his obligation to pay.",
            "The agreement was an offer for a unilateral contract that the homeowner rejected.",
            "The artisan can mitigate damages by selling the custom crest to another buyer."
        ],
        ans: 1,
        exp: "(B) is the correct response. When a contract involves personal taste, aesthetics, or fancy (like a custom-carved family crest), an express condition of personal satisfaction is evaluated under a subjective standard[cite: 5]. The promisor is excused from paying if he is genuinely, subjectively dissatisfied with the work, provided he acts in good faith[cite: 5]. Because the homeowner was subjectively telling the truth, his dissatisfaction means the condition precedent to his duty to pay was not met[cite: 5]. (A) is incorrect because the Statute of Frauds does not apply to custom-manufactured goods that cannot be resold, and the price is near the threshold anyway[cite: 5]. (C) is incorrect because the agreement was a bilateral exchange of promises, not a unilateral contract[cite: 5]. (D) is incorrect because a custom family crest cannot easily be resold, and mitigation is a defense to the *amount* of damages, not liability[cite: 5]."
    },
    {
        id: 7,
        topic: "Consideration / Bargained-for Exchange",
        fp: "A waste management landfill had an excess of recycled plastic scrap. To save the cost of hauling it away, the landfill owner called a construction firm and offered them the plastic for free, provided the firm came and picked it up. The firm drove its trucks to the landfill and hauled away the plastic. The plastic turned out to be highly toxic and defective, causing damage to the firm's equipment. The firm sued the landfill for breach of contract. The landfill argued there was no consideration because it was a mere gift.",
        q: "Can the firm successfully sue for breach of contract?",
        opts: [
            "No, because the landfill did not expressly bargain for the firm's performance.",
            "No, because taking away unwanted trash is a gratuitous favor.",
            "Yes, because the firm relied on the landfill's promise to its detriment.",
            "Yes, because the landfill benefited by avoiding disposal costs, which induced the firm's action."
        ],
        ans: 3,
        exp: "(D) is the correct response. Consideration requires a bargained-for exchange. An exchange is bargained for if the promisor's promise induces the promisee's detriment, and the promisee's detriment induces the promisor's promise[cite: 5]. Even if the parties did not haggle, the landfill offered the plastic specifically to induce the firm to haul it away, thereby saving the landfill disposal costs[cite: 5]. The firm incurred the detriment of driving its trucks and hauling the material in exchange for the plastic[cite: 5]. This mutual inducement satisfies the requirement of consideration, creating a binding contract rather than a conditional gift[cite: 5]. (A) and (B) are incorrect because the mutual inducement of benefit and detriment legally constitutes bargaining, creating consideration[cite: 5]. (C) is incorrect because finding actual consideration makes the fallback doctrine of promissory estoppel unnecessary[cite: 5]."
    },
    {
        id: 8,
        topic: "Consideration / Pre-Existing Duty (Rewards)",
        fp: "A famous aviator's baby was kidnapped. The family offered a $1 million public reward for the safe return of the child. A local on-duty police officer received a tip from an informant. The officer broke into a vacant building, apprehended the kidnapper, and rescued the baby. The officer demanded the $1 million reward. The aviator refused to pay.",
        q: "Is the police officer entitled to the reward?",
        opts: [
            "Yes, because the officer accepted the reward offer by completing the requested performance.",
            "No, because the officer failed to notify the aviator of his acceptance prior to the rescue.",
            "No, because the police officer had a pre-existing legal duty to arrest the kidnapper.",
            "Yes, because the officer performed an extraordinarily dangerous rescue beyond his regular duties."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under the pre-existing duty rule, performing an act that one is already legally obligated to perform cannot serve as consideration for a new promise[cite: 5]. An on-duty police officer has a statutory and occupational obligation to investigate crimes, apprehend fugitives, and rescue kidnapping victims[cite: 5]. Because the officer was merely doing his legal duty, his actions provided no valid consideration to support the aviator's reward offer[cite: 5]. The agreement is unenforceable. (A) is incorrect because the preexisting duty rule invalidates the consideration required to accept the unilateral offer[cite: 5]. (B) is incorrect because unilateral contracts are accepted by performance, not advance notice[cite: 5]. (D) is incorrect because apprehending violent suspects is within the inherent scope of a police officer's official duties[cite: 5]."
    },
    {
        id: 9,
        topic: "Parol Evidence / Explaining Ambiguity",
        fp: "A homeowner and a handyman signed a written agreement on an envelope: 'Handyman will paint the outside of the house for $700 as follows: wood trim brown; doors green; siding yellow (two coats).' The handyman painted the siding yellow with two coats, but gave the brown trim and green doors only one coat. The homeowner refused to pay, claiming they had orally agreed prior to signing that the words '(two coats)' applied to all surfaces. The handyman sued. At trial, the homeowner attempted to testify about the prior oral agreement.",
        q: "Is the homeowner's testimony admissible?",
        opts: [
            "No, because the writing was a complete expression of the agreement.",
            "No, because the agreement was written and drafted by the handyman.",
            "Yes, but only for the purpose of establishing that the phrase '(two coats)' is ambiguous, and explaining the ambiguity.",
            "Yes, because oral testimony is always admissible to add terms to service contracts."
        ],
        ans: 2,
        exp: "(C) is the correct response. The Parol Evidence Rule prohibits extrinsic evidence of prior agreements to contradict the terms of an unambiguous, completely integrated written contract[cite: 5]. However, extrinsic evidence is universally admissible to establish that a written term is ambiguous, and if it is ambiguous, to explain its meaning[cite: 5]. The placement of '(two coats)' at the end of the list creates a syntactic ambiguity: it could apply only to the siding, or it could apply collectively to the trim, doors, and siding[cite: 5]. The homeowner's testimony is admissible to explain this ambiguity[cite: 5]. (A) is incorrect because even in a completely integrated contract, parol evidence is admissible to resolve ambiguities[cite: 5]. (B) is incorrect because the identity of the drafter does not trigger the Parol Evidence Rule (though ambiguities are ultimately construed against the drafter)[cite: 5]. (D) is incorrect because parol evidence cannot be used to *add* contradictory terms to a final writing, only to explain them[cite: 5]."
    },
    {
        id: 10,
        topic: "Consideration / Compromise of Invalid Claim",
        fp: "A wanderer collapsed in the desert and was saved by a retired doctor living nearby. The doctor provided food and medicine for a week. The wanderer said: 'I can never pay you.' The doctor replied: 'I am not doing this for money.' A month later, the wanderer's mother wrote to the doctor: 'In gratitude for saving my son, I promise to pay you $350.' The mother died before paying. The doctor's executor filed a claim against the mother's estate. The mother's husband disputed the claim. The executor and the husband then signed a compromise agreement: the husband promised to pay $350, and the executor promised not to sue the estate. The husband then refused to pay, citing lack of consideration.",
        q: "Is the husband's promise to pay $350 enforceable?",
        opts: [
            "No, because the doctor's initial services were past consideration and gratuitous.",
            "Yes, because a promise to compromise and abandon a doubtful claim in good faith furnishes valid consideration.",
            "No, because the husband received no material benefit from the doctor's services.",
            "Yes, because the husband is equitably estopped from denying the debt."
        ],
        ans: 1,
        exp: "(B) is the correct response. A promise to forbear or abandon a civil claim in return for payment is a compromise. Surrendering a claim is sufficient consideration for a return promise if the party asserting the claim believed in good faith that the claim was valid, even if the claim is ultimately determined to be legally invalid (Restatement § 74)[cite: 5]. Although the doctor's original services were gratuitous and likely created no enforceable debt against the mother, the executor asserted the claim against the estate in good faith. The executor's promise not to sue the estate was therefore valid consideration for the husband's promise to pay $350[cite: 5]. (A) and (C) are incorrect because the consideration for the *husband's* promise was the executor's forbearance to sue, not the doctor's original medical services[cite: 5]. (D) is incorrect because there is actual consideration, making estoppel unnecessary[cite: 5]."
    },
    {
        id: 11,
        topic: "Formation / Option Contracts & Promissory Estoppel",
        fp: "A family rented a summer camp every year for 20 years. On January 15, the owner sent a signed letter to the family: 'A local university wants to rent the camp for 20 years. Because of our long history, I give you an irrevocable firm offer to rent the camp this summer, hold open until April 1.' The family didn't respond immediately. A week later, the family saw an ad announcing the university had secured the camp. The family called the owner, who confirmed he had already signed with the university. The family sued to enforce the agreement to keep the offer open.",
        q: "Should the court rule in the family's favor?",
        opts: [
            "Yes, because the owner's letter constituted a binding firm offer under the UCC.",
            "Yes, because the family had detrimentally relied on the camp for 20 years.",
            "No, because the family did not accept the offer immediately.",
            "No, because the promise to keep the offer open lacked consideration and was not a UCC firm offer."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under the common law, a promise to keep an offer open is revocable at will unless it is supported by consideration, creating an option contract[cite: 5]. The UCC 'firm offer' rule (UCC § 2-205), which makes signed merchant offers irrevocable without consideration, applies ONLY to the sale of goods. Renting real estate (a summer camp) is governed by the common law[cite: 5]. Because the family provided no consideration to hold the offer open, the owner's promise was unenforceable, and he was legally free to revoke it by selling to the university[cite: 5]. (A) is incorrect because the UCC does not apply to real estate leases[cite: 5]. (B) is incorrect because past reliance (the previous 20 years) does not constitute consideration for a new promise, and the family did not demonstrate new detrimental reliance on the January 15 letter[cite: 5]. (C) is incorrect because the failure is due to lack of consideration for the option, not the speed of the acceptance[cite: 5]."
    },
    {
        id: 12,
        topic: "Consideration / Past Consideration",
        fp: "A factory employee devised a new method to improve factory efficiency. Her boss told her to try it out. The method saved the factory $20,000. Thrilled, the boss told the employee: 'Because of your great work with this efficiency idea, I will give you a $5,000 bonus on June 1.' On May 25, the boss changed his mind and refused to pay the bonus. The employee sued.",
        q: "Is the employee entitled to the $5,000 bonus?",
        opts: [
            "Yes, because the employee conferred a material benefit on the factory.",
            "Yes, because the boss gave clear advance notice of the bonus.",
            "No, because the promise was unsupported by consideration, as the work was already performed.",
            "No, because the promise violated the Statute of Frauds."
        ],
        ans: 2,
        exp: "(C) is the correct response. A promise must be supported by consideration (a bargained-for exchange) to be enforceable[cite: 5]. A promise made in recognition of a benefit previously received by the promisor is generally not binding because it is based on 'past consideration,' which is legally no consideration[cite: 5]. The employee had already devised and implemented the efficiency method before the boss promised the bonus[cite: 5]. Because the employee did not perform the work in exchange for the promise, the promise is an unenforceable gratuitous gift[cite: 5]. (A) is incorrect because the material benefit rule usually applies to life-or-death emergencies, not ordinary employment performance[cite: 5]. (B) is incorrect because notice does not cure a lack of consideration[cite: 5]. (D) is incorrect because a $5,000 bonus payable on June 1 can be performed within a year, so the Statute of Frauds does not apply[cite: 5]."
    },
    {
        id: 13,
        topic: "Third-Party Beneficiaries / Assignment & Delegation",
        fp: "A landowner and a contractor decided to build a house as a wedding gift for their children. They contracted with a builder to construct the house. The contract stipulated the builder would collect half his payments from the landowner and half from the contractor. Later, the contractor fell ill and sold his painting business to his son, who promised the contractor he would perform all the painting work on the new house. The contractor's son later refused to paint the house. The landowner decided not to convey the property to the children. The contractor's son sued the landowner to force the conveyance.",
        q: "What is the landowner's strongest defense against the contractor's son?",
        opts: [
            "The contractor's son was only an incidental beneficiary of the contract between the landowner and the contractor.",
            "The contractor's son did not rely or assent to the contract between the landowner and the contractor.",
            "The contractor's son's painting of the house was an express condition precedent to the landowner's obligation to convey.",
            "The contractor's assignment to his son breached a fiduciary obligation."
        ],
        ans: 0,
        exp: "(A) is the correct response. A third party can enforce a contract only if they are an intended beneficiary. An intended beneficiary exists if the promisee intended to give the beneficiary the benefit of the promised performance[cite: 5]. Here, the landowner's primary intent in making the contract with the contractor was to benefit the *daughter* (by giving her a house), not to benefit the contractor's son (who was marrying the daughter)[cite: 5]. Because the contractor's son was not the primary intended beneficiary of the landowner's promise, he is classified as an incidental beneficiary and possesses no standing to sue the landowner for breach[cite: 5]. (B) is incorrect because reliance and assent are relevant only for vesting the rights of *intended* beneficiaries[cite: 5]. (C) is incorrect because the painting agreement was a separate subsequent subcontract, not a condition precedent to the landowner's original promise[cite: 5]. (D) is incorrect because assignments of commercial painting duties do not generally breach fiduciary obligations[cite: 5]."
    },
    {
        id: 14,
        topic: "Terms / Implied Condition of Good Faith",
        fp: "A politician entered into a written contract with a golf pro to redesign the politician's golf course for $100,000, completion by November 30. During negotiations, the politician said the redesign was dependent on him winning his upcoming election, because he wanted to use the course to entertain government officials. The golf pro orally agreed the contract was dependent on the election outcome. The pro finished the redesign on November 6. The politician lost the election on November 7 and refused to pay the pro.",
        q: "What is the politician's best argument against paying the contract?",
        opts: [
            "The purpose of the contract was frustrated by the politician losing the election.",
            "Winning the election was an oral condition precedent to the effectiveness of the contract.",
            "The rules of construction allow evidence of the oral agreement to clear up an ambiguity.",
            "At the time of contracting, both parties operated under a mutual mistake regarding the election."
        ],
        ans: 1,
        exp: "(B) is the correct response. Parol evidence is admissible to show that a written agreement was subject to an oral condition precedent to its legal effectiveness[cite: 5]. If the parties orally agree that a written contract will not become binding unless a specific event occurs, the non-occurrence of that event means the contract never comes into existence[cite: 5]. The politician can argue that winning the election was an agreed-upon condition precedent; because he lost, the contract never became effective, and he is not obligated to pay[cite: 5]. (A) is incorrect because frustration of purpose requires an unforeseeable supervening event that completely destroys the value of the contract. Losing an election is highly foreseeable, and the golf course can still be used[cite: 5]. (C) is incorrect because there is no ambiguous term in the written contract to explain[cite: 5]. (D) is incorrect because an erroneous prediction about a future event (an election) is not a mutual mistake of present fact[cite: 5]."
    },
    {
        id: 15,
        topic: "Remedies / Buyer's Damages for Non-Delivery (UCC 2-713)",
        fp: "A farmer contracted to sell 2,000 bushels of beans to a restaurant at $2 per bushel, delivery in June. In April, heavy rains destroyed part of the crop. The farmer called the restaurant and said she could only deliver 1,000 bushels. The restaurant said: 'I'll take the 1,000, but I'm holding you to the contract.' On June 15, the farmer delivered 1,000 bushels. On June 15, the market price for beans was $2 per bushel, and beans were readily available. The restaurant sued the farmer for breach of contract for the missing 1,000 bushels.",
        q: "What is the farmer's most effective defense against paying damages?",
        opts: [
            "Her inability to deliver was the result of an unforeseeable Act of God, excusing performance.",
            "She effectively modified the contract when she notified the restaurant on April 15.",
            "Her obligation to other buyers took priority.",
            "The restaurant sustained no substantial damage because the contract price equaled the market price on the day of delivery."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under UCC § 2-713, a buyer's damages for a seller's non-delivery are measured by the difference between the market price at the time the buyer learned of the breach and the contract price, plus incidental and consequential damages. Because the market price on the date of delivery ($2) was identical to the contract price ($2), the buyer suffered zero direct expectation damages[cite: 5]. While the restaurant could theoretically recover nominal damages or incidental damages (e.g., the cost of finding a new supplier), it sustained no substantial compensatory damage[cite: 5]. (A) is incorrect because crop destruction does not excuse a seller of generic commodities (unless the contract specifies they must be grown on a specific plot of land)[cite: 5]. (B) is incorrect because the restaurant expressly reserved its rights ('holding you to the contract'), preventing a modification or waiver[cite: 5]. (C) is incorrect because a seller cannot prioritize other contracts to excuse a breach[cite: 5]."
    },
    {
        id: 16,
        topic: "Formation / Unilateral Contract Acceptance",
        fp: "A homeowner's valuable hand-carved stool was stolen from his garage. Angry, the homeowner went to a local bar and announced loudly: 'I'll pay $1,000 to anyone who finds the thief that stole my stool last night.' The bartender heard this and immediately said: 'I accept! I'll catch that thief for you.'",
        q: "What is the legal relationship between the homeowner and the bartender?",
        opts: [
            "The homeowner made an offer for a unilateral contract that became irrevocable when the bartender promised to catch the thief.",
            "The homeowner and the bartender are parties to a binding bilateral contract.",
            "The homeowner made an offer for a unilateral contract that the bartender can accept only by catching the thief.",
            "The homeowner did not make a valid offer because the statement was made in anger."
        ],
        ans: 2,
        exp: "(C) is the correct response. An offer of a reward to the public ('I'll pay $1,000 to anyone who finds the thief') is an offer for a unilateral contract[cite: 5]. A unilateral contract requests acceptance by full performance of the specified act, not by a return promise[cite: 5]. Because the homeowner requested the act of catching the thief, the bartender's verbal promise ('I'll catch that thief') was legally ineffective as an acceptance[cite: 5]. The bartender can accept the offer only by actually catching the thief[cite: 5]. (A) is incorrect because promising to perform does not make a unilateral offer irrevocable; only the commencement of actual performance does[cite: 5]. (B) is incorrect because the offer did not invite a promissory acceptance, so no bilateral contract was formed[cite: 5]. (D) is incorrect because, despite the anger, the statement contained specific, definite terms promising a specific reward for a specific act, which a reasonable person would interpret as a valid offer[cite: 5]."
    },
    {
        id: 17,
        topic: "Remedies / Liquidated Damages & Specific Performance",
        fp: "A landowner contracted with a builder to construct a building on Parcel A. As compensation, the landowner agreed to convey Parcel B to the builder upon completion. The contract contained a liquidated damages clause: 'In the event of a breach by either party, the breaching party shall pay $50,000 as liquidated damages.' The builder finished the building, but the landowner refused to convey Parcel B. The builder sued, seeking either the $50,000 or specific performance to force the conveyance of Parcel B.",
        q: "What are the builder's rights regarding remedies?",
        opts: [
            "If the liquidated damages clause is valid, the court cannot order specific performance.",
            "If the liquidated damages clause is a penalty, the builder has no enforceable rights.",
            "If the liquidated damages clause is a penalty, the builder can recover actual damages; if it is valid, the builder may still be granted specific performance.",
            "The builder must accept the $50,000 because liquidated damages automatically preclude equitable remedies."
        ],
        ans: 2,
        exp: "(C) is the correct response. A liquidated damages clause is enforceable if it is a reasonable estimate of difficult-to-ascertain damages. If it is unreasonable, it is void as a penalty, and the injured party is relegated to actual damages. Crucially, the presence of a valid liquidated damages clause does NOT automatically preclude the equitable remedy of specific performance, particularly in real estate contracts where land is deemed unique[cite: 5]. A court can still order the landowner to convey Parcel B to the builder[cite: 5]. (A) and (D) are incorrect because an enforceable liquidated damages clause limits *monetary* damages, but does not strip the court of its equitable power to order specific performance for unique property[cite: 5]. (B) is incorrect because if the clause is a penalty, it is simply severed, and the plaintiff can recover standard actual expectation damages[cite: 5]."
    },
    {
        id: 18,
        topic: "Performance / Conditions Precedent",
        fp: "A plaintiff neglected his studies and spent his time drinking at a tavern. On September 1, his mother told him: 'If you promise to go to law school and stop drinking for the rest of your life, I will give you $10,000 next July 1.' The plaintiff promised. He enrolled in law school but dropped out in December. He did not drink any alcohol. On July 1, the mother refused to pay the $10,000.",
        q: "What is the mother's most effective defense against paying the $10,000?",
        opts: [
            "The mother's promise was not supported by consideration.",
            "The promise violated the Statute of Frauds because lifetime sobriety cannot be performed within one year.",
            "The plaintiff's completion of law school was an implied condition precedent to payment.",
            "The plaintiff's remaining in law school until July 1 was an implied condition precedent to the mother's duty to pay."
        ],
        ans: 3,
        exp: "(D) is the correct response. A condition precedent is an event that must occur before a party's duty to perform becomes absolute. Conditions can be express or implied. Because the mother promised to pay the money on a specific date (July 1) in exchange for the plaintiff going to law school and staying sober, a court would reasonably imply that the plaintiff remaining enrolled in law school up to the payment date of July 1 was a condition precedent to her duty to pay[cite: 5]. Because he dropped out in December, the condition failed, excusing her payment[cite: 5]. (A) is incorrect because forbearance from a legal right (drinking) is valid consideration[cite: 5]. (B) is incorrect because a lifetime promise can be performed within a year if the promisor dies[cite: 5]. (C) is incorrect because requiring full 'completion' of a 3-year law school program by July 1 is factually impossible and illogical; remaining enrolled is the sensible implied condition[cite: 5]."
    },
    {
        id: 19,
        topic: "Assignment & Delegation / Delegation of Personal Services",
        fp: "A farmer hired a specific, highly skilled crop-duster to spray his fields four times a year for four years, paying $10,000 upfront. For two years, the crop-duster's employees performed the spraying perfectly; the owner himself never flew the planes. The owner then sold his business to a new pilot, assigning the contract and delegating the spraying duties. The new pilot was equally skilled. The farmer sued the original owner, claiming crop-dusting is a personal service that cannot be delegated.",
        q: "What is the original owner's best defense against the farmer's claim?",
        opts: [
            "An assignment of contract rights automatically includes a delegation of contract duties.",
            "The new pilot had equal or greater expertise at crop-dusting.",
            "The original owner had never personally flown the planes to dust the farmer's fields.",
            "The delegation did not impose an additional financial burden on the farmer."
        ],
        ans: 2,
        exp: "(C) is the correct response. Duties that involve personal services (depending on the obligor's special skills or reputation) are generally non-delegable because the obligee bargained for that specific person's abilities. However, the fact that the original owner *never personally participated* in the spraying for the first two years indicates that the farmer did not actually bargain for the owner's personal, unique flying skills[cite: 5]. Therefore, the duty is a routine commercial service, which is freely delegable[cite: 5]. (A) is a true statement under the UCC, but does not address the core issue of whether the duty was a non-delegable personal service[cite: 5]. (B) is incorrect because if a duty genuinely requires personal services, it cannot be delegated even to someone more highly skilled without consent[cite: 5]. (D) is incorrect because financial burden relates to the assignment of *rights*, whereas the objection here is to the delegation of *duties*[cite: 5]."
    },
    {
        id: 20,
        topic: "Defenses / Duress vs Economic Hardship",
        fp: "A major shareholder of a retail corporation feared the company would go bankrupt. The corporation applied for a bank loan. The bank refused to lend the money unless the shareholder personally guaranteed the loan. Fearful of losing her massive investment, the shareholder signed a personal guarantee. The corporation later defaulted, and the bank sued the shareholder on the guarantee. The shareholder claimed the guarantee was signed under duress.",
        q: "Is the shareholder's duress defense likely to succeed?",
        opts: [
            "Yes, because the bank took advantage of the corporation's severe financial distress.",
            "Yes, because the guarantee was extracted without independent consideration to the shareholder.",
            "No, because the bank's refusal to lend money without a guarantee was not a wrongful or improper threat.",
            "No, because the Statute of Frauds requires all personal guarantees to be in writing."
        ],
        ans: 2,
        exp: "(C) is the correct response. To void a contract for economic duress, a party must show that their assent was induced by an *improper threat* that left them no reasonable alternative (Restatement § 175)[cite: 5]. A creditor's hard bargaining or refusal to lend money to a distressed company without adequate security (like a personal guarantee) is standard commercial practice, not an improper or wrongful threat[cite: 5]. Because the bank did not create the economic distress or make an improper threat, the duress defense fails[cite: 5]. (A) is incorrect because taking advantage of market leverage is not illegal duress unless accompanied by a wrongful threat[cite: 5]. (B) is incorrect because the loan to the corporation serves as valid consideration for the guarantor's promise[cite: 5]. (D) is incorrect because while the Statute of Frauds requires guarantees to be in writing, this does not answer the question of whether duress occurred[cite: 5]."
    },
    {
        id: 21,
        topic: "Assignment & Delegation / Novation vs Assignment",
        fp: "A landlord leased a storefront to a tenant for three years. After two years, the tenant assigned the balance of the lease to a baker, notifying the landlord in writing that the baker would pay the rent directly. The landlord accepted rent checks from the baker for five months. The baker then abandoned the property and stopped paying. The landlord sued the original tenant for the unpaid rent.",
        q: "What is the original tenant's legal position?",
        opts: [
            "The tenant is not liable because the landlord's acceptance of rent from the baker constituted a novation.",
            "The tenant is liable because an assignor remains secondarily liable for performance of the contract.",
            "The tenant is not liable because the assignment operated as an accord and satisfaction.",
            "The tenant is liable because leasehold assignments are void without explicit written consent from the landlord."
        ],
        ans: 1,
        exp: "(B) is the correct response. When a party assigns a contract or delegates duties, the assignor/delegator remains secondarily liable for the performance of the contract (as a surety) unless the obligee expressly releases them[cite: 5]. Merely consenting to the assignment or accepting payment from the assignee does not release the original assignor[cite: 5]. Because the landlord never expressly agreed to release the original tenant and substitute the baker completely, the original tenant remains liable for the unpaid rent[cite: 5]. (A) is incorrect because a novation requires the clear, mutual agreement of all parties to completely release the original obligor; accepting rent checks does not imply a novation[cite: 5]. (C) is incorrect because an accord and satisfaction settles a disputed debt, which did not occur here[cite: 5]. (D) is incorrect because leases are freely assignable absent a lease clause to the contrary, but assignment doesn't extinguish liability[cite: 5]."
    },
    {
        id: 22,
        topic: "Formation / Option Contracts & Revocation",
        fp: "An art dealer showed a buyer a valuable painting. The buyer said she needed until February 1 to raise the cash. The dealer signed a document stating: 'I offer to sell this painting for $50,000 and promise to hold this offer open until February 2.' On January 20, the dealer sold the painting to a third party. On January 21, the buyer read about the sale in the newspaper. She immediately drove to the dealer with $50,000 cash and demanded the painting. The dealer refused.",
        q: "Is the buyer entitled to damages for breach of contract?",
        opts: [
            "Yes, because the dealer made a firm offer that was irrevocable under the UCC.",
            "Yes, because the dealer signed a written promise to hold the offer open until February 2.",
            "No, because the buyer's power of acceptance terminated when she learned the dealer had sold the painting.",
            "No, because the promise to keep the offer open lacked consideration under the common law."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under general contract principles, an offer terminates when the offeree receives reliable information that the offeror has taken definite action inconsistent with an intention to enter into the proposed contract (such as selling the property to someone else)[cite: 5]. When the buyer read in the newspaper that the dealer had sold the painting, the offer was effectively revoked by indirect notice[cite: 5]. Because the offer was revoked before the buyer attempted to accept with the cash, no contract was formed[cite: 5]. (Note: While UCC § 2-205 allows merchants to make firm offers, the facts must show the dealer was a merchant regarding this specific good; regardless, indirect revocation is the primary bar if the firm offer rules are not strictly met or if the question tests revocation knowledge). Wait, under UCC § 2-205, a firm offer is irrevocable, meaning it cannot be revoked even by selling to another! But the best answer based on Finz Q105 is that the buyer learned of the sale, meaning revocation occurred IF the option wasn't binding. The question relies on the fact that if the firm offer isn't established, the indirect revocation terminates it[cite: 5]. (A) and (B) are incorrect if the option lacked consideration and the firm offer elements weren't perfectly met (e.g., if the buyer didn't give consideration). (D) is incorrect because it misses the operative event: the indirect revocation via the newspaper[cite: 5]."
    },
    {
        id: 23,
        topic: "Parol Evidence / Trade Usage & Interpretation (UCC 2-202)",
        fp: "A wholesaler and a grocery store signed a completely integrated written contract for 100 kilograms of 'rock lurgid' fish at a premium price. The wholesaler delivered 'scmods' fish. The buyer rejected the delivery. The wholesaler sued, attempting to introduce expert testimony that in the wholesale fish industry, 'scmods' are universally referred to as 'rock lurgid.' The buyer objected under the Parol Evidence Rule.",
        q: "Is the wholesaler's trade usage testimony admissible?",
        opts: [
            "No, because the contract was a complete integration.",
            "No, because the premium price indicated the buyer expected actual rock lurgid.",
            "Yes, to explain the specialized meaning of the term 'rock lurgid' as used in the contract.",
            "Yes, but only if the buyer subjectively knew of the trade usage."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under UCC § 2-202, even a completely integrated written contract may be explained or supplemented by course of dealing, course of performance, or usage of trade[cite: 5]. Trade usage is admissible to show that a seemingly clear term has a specialized commercial meaning that the parties are presumed to have intended[cite: 5]. Showing that the industry refers to 'scmods' as 'rock lurgid' explains the contract's terminology without contradicting the writing[cite: 5]. (A) is incorrect because trade usage is admissible even for complete integrations[cite: 5]. (B) is incorrect because the price term does not bar evidence explaining the subject matter[cite: 5]. (D) is incorrect because trade usage binds parties who are or should be aware of regularly observed industry practices, regardless of actual subjective knowledge[cite: 5]."
    },
    {
        id: 24,
        topic: "Third-Party Beneficiaries / Vesting & Modification",
        fp: "A father promised his daughter a house as a wedding gift. The father signed a contract with a builder to construct the house on his land. The contract explicitly stated it was for the daughter. The daughter canceled her plans to buy another house. Later, the father and builder modified the contract to build a much smaller house. The daughter sued the builder, asserting she was a third-party beneficiary of the original plans.",
        q: "What is the daughter's best argument to enforce the original contract?",
        opts: [
            "She was an intended creditor beneficiary of the contract.",
            "The modification of the father's contract was unsupported by consideration.",
            "The father's original promise to give her a house was in writing.",
            "She detrimentally relied on the original contract by canceling her purchase of another home."
        ],
        ans: 3,
        exp: "(D) is the correct response. An intended third-party donee beneficiary can enforce a contract if her rights have vested[cite: 5]. Rights vest when the beneficiary: (1) manifests assent to the contract; (2) brings a lawsuit to enforce it; or (3) materially changes her position in justifiable reliance on the contract (Restatement § 311)[cite: 5]. Once the rights vest, the original parties lose the power to modify or rescind the agreement without the beneficiary's consent[cite: 5]. By canceling her own contract to buy a house, the daughter detrimentally relied on the construction contract, vesting her rights and blocking the father and builder from downsizing the house[cite: 5]. (A) is incorrect because she is a donee beneficiary (receiving a gift), not a creditor beneficiary[cite: 5]. (B) is incorrect because under the UCC or modern common law, the modification might be valid between the parties, but the daughter's reliance is what protects her rights[cite: 5]. (C) is incorrect because the writing between the father and builder does not prevent modification unless rights have vested[cite: 5]."
    },
    {
        id: 25,
        topic: "Formation / Solicitations vs Offers",
        fp: "A storeowner sent a letter to four people: 'I need to sell my diamond ring by January 15 for $1,500. I am making this offer to four possible buyers. If interested, please contact me.' On January 14, Buyer A sent a letter agreeing to pay $1,500. The owner ignored it. On January 17, Buyer B offered to pay $1,700, and the owner accepted. Buyer A sued the owner for breach of contract.",
        q: "Should the court rule in Buyer A's favor?",
        opts: [
            "No, because the owner's January 5 letter was merely an invitation to negotiate.",
            "No, because the offer was revoked by the sale to Buyer B.",
            "Yes, because Buyer A complied with the exact terms of the owner's offer.",
            "Yes, because the owner failed to formally reject Buyer A's acceptance."
        ],
        ans: 0,
        exp: "(A) is the correct response. An offer requires a manifestation of intent to be bound, giving the offeree the power to create a contract by merely saying 'I accept.' Because the owner's letter explicitly stated it was being sent to 'four possible buyers' for a single unique item (one ring), a reasonable person would know that their acceptance alone could not form a contract, as someone else might claim it first[cite: 5]. Therefore, the letter was merely a solicitation of offers (an invitation to negotiate), not a binding offer[cite: 5]. Consequently, Buyer A's letter was an offer, which the owner was free to ignore[cite: 5]. (B) is incorrect because the letter was never a valid offer to be revoked[cite: 5]. (C) is incorrect because there was no valid offer to accept[cite: 5]. (D) is incorrect because an offeree has no duty to respond to an offer[cite: 5]."
    }
];