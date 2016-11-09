

module.exports = function config(sequelize, DataTypes) {
  return sequelize.define('AggPlay', {
    gsisId: {
      type: DataTypes.STRING(10),
      field: 'gsis_id',
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'play',
        key: 'gsis_id',
      },
      onUpdate: 'NO ACTION',
      onDelete: 'CASCADE',
    },
    driveId: {
      type: DataTypes.INTEGER,
      field: 'drive_id',
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'play',
        key: 'drive_id',
      },
      onUpdate: 'NO ACTION',
      onDelete: 'CASCADE',
    },
    playId: {
      type: DataTypes.INTEGER,
      field: 'play_id',
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'play',
        key: 'play_id',
      },
      onUpdate: 'NO ACTION',
      onDelete: 'CASCADE',
    },
    defenseAst: {
      type: DataTypes.INTEGER,
      field: 'defense_ast',
      allowNull: false,
    },
    defenseFfum: {
      type: DataTypes.INTEGER,
      field: 'defense_ffum',
      allowNull: false,
    },
    defenseFgblk: {
      type: DataTypes.INTEGER,
      field: 'defense_fgblk',
      allowNull: false,
    },
    defenseFrec: {
      type: DataTypes.INTEGER,
      field: 'defense_frec',
      allowNull: false,
    },
    defenseFrecTds: {
      type: DataTypes.INTEGER,
      field: 'defense_frec_tds',
      allowNull: false,
    },
    defenseFrecYds: {
      type: DataTypes.INTEGER,
      field: 'defense_frec_yds',
      allowNull: false,
    },
    defenseInt: {
      type: DataTypes.INTEGER,
      field: 'defense_int',
      allowNull: false,
    },
    defenseIntTds: {
      type: DataTypes.INTEGER,
      field: 'defense_int_tds',
      allowNull: false,
    },
    defenseIntYds: {
      type: DataTypes.INTEGER,
      field: 'defense_int_yds',
      allowNull: false,
    },
    defenseMiscTds: {
      type: DataTypes.INTEGER,
      field: 'defense_misc_tds',
      allowNull: false,
    },
    defenseMiscYds: {
      type: DataTypes.INTEGER,
      field: 'defense_misc_yds',
      allowNull: false,
    },
    defensePassDef: {
      type: DataTypes.INTEGER,
      field: 'defense_pass_def',
      allowNull: false,
    },
    defensePuntblk: {
      type: DataTypes.INTEGER,
      field: 'defense_puntblk',
      allowNull: false,
    },
    defenseQbhit: {
      type: DataTypes.INTEGER,
      field: 'defense_qbhit',
      allowNull: false,
    },
    defenseSafe: {
      type: DataTypes.INTEGER,
      field: 'defense_safe',
      allowNull: false,
    },
    defenseSk: {
      type: DataTypes.FLOAT(24),
      field: 'defense_sk',
      allowNull: false,
    },
    defenseSkYds: {
      type: DataTypes.INTEGER,
      field: 'defense_sk_yds',
      allowNull: false,
    },
    defenseTkl: {
      type: DataTypes.INTEGER,
      field: 'defense_tkl',
      allowNull: false,
    },
    defenseTklLoss: {
      type: DataTypes.INTEGER,
      field: 'defense_tkl_loss',
      allowNull: false,
    },
    defenseTklLossYds: {
      type: DataTypes.INTEGER,
      field: 'defense_tkl_loss_yds',
      allowNull: false,
    },
    defenseTklPrimary: {
      type: DataTypes.INTEGER,
      field: 'defense_tkl_primary',
      allowNull: false,
    },
    defenseXpblk: {
      type: DataTypes.INTEGER,
      field: 'defense_xpblk',
      allowNull: false,
    },
    fumblesForced: {
      type: DataTypes.INTEGER,
      field: 'fumbles_forced',
      allowNull: false,
    },
    fumblesLost: {
      type: DataTypes.INTEGER,
      field: 'fumbles_lost',
      allowNull: false,
    },
    fumblesNotforced: {
      type: DataTypes.INTEGER,
      field: 'fumbles_notforced',
      allowNull: false,
    },
    fumblesOob: {
      type: DataTypes.INTEGER,
      field: 'fumbles_oob',
      allowNull: false,
    },
    fumblesRec: {
      type: DataTypes.INTEGER,
      field: 'fumbles_rec',
      allowNull: false,
    },
    fumblesRecTds: {
      type: DataTypes.INTEGER,
      field: 'fumbles_rec_tds',
      allowNull: false,
    },
    fumblesRecYds: {
      type: DataTypes.INTEGER,
      field: 'fumbles_rec_yds',
      allowNull: false,
    },
    fumblesTot: {
      type: DataTypes.INTEGER,
      field: 'fumbles_tot',
      allowNull: false,
    },
    kickingAllYds: {
      type: DataTypes.INTEGER,
      field: 'kicking_all_yds',
      allowNull: false,
    },
    kickingDowned: {
      type: DataTypes.INTEGER,
      field: 'kicking_downed',
      allowNull: false,
    },
    kickingFga: {
      type: DataTypes.INTEGER,
      field: 'kicking_fga',
      allowNull: false,
    },
    kickingFgb: {
      type: DataTypes.INTEGER,
      field: 'kicking_fgb',
      allowNull: false,
    },
    kickingFgm: {
      type: DataTypes.INTEGER,
      field: 'kicking_fgm',
      allowNull: false,
    },
    kickingFgmYds: {
      type: DataTypes.INTEGER,
      field: 'kicking_fgm_yds',
      allowNull: false,
    },
    kickingFgmissed: {
      type: DataTypes.INTEGER,
      field: 'kicking_fgmissed',
      allowNull: false,
    },
    kickingFgmissedYds: {
      type: DataTypes.INTEGER,
      field: 'kicking_fgmissed_yds',
      allowNull: false,
    },
    kickingI20: {
      type: DataTypes.INTEGER,
      field: 'kicking_i20',
      allowNull: false,
    },
    kickingRec: {
      type: DataTypes.INTEGER,
      field: 'kicking_rec',
      allowNull: false,
    },
    kickingRecTds: {
      type: DataTypes.INTEGER,
      field: 'kicking_rec_tds',
      allowNull: false,
    },
    kickingTot: {
      type: DataTypes.INTEGER,
      field: 'kicking_tot',
      allowNull: false,
    },
    kickingTouchback: {
      type: DataTypes.INTEGER,
      field: 'kicking_touchback',
      allowNull: false,
    },
    kickingXpa: {
      type: DataTypes.INTEGER,
      field: 'kicking_xpa',
      allowNull: false,
    },
    kickingXpb: {
      type: DataTypes.INTEGER,
      field: 'kicking_xpb',
      allowNull: false,
    },
    kickingXpmade: {
      type: DataTypes.INTEGER,
      field: 'kicking_xpmade',
      allowNull: false,
    },
    kickingXpmissed: {
      type: DataTypes.INTEGER,
      field: 'kicking_xpmissed',
      allowNull: false,
    },
    kickingYds: {
      type: DataTypes.INTEGER,
      field: 'kicking_yds',
      allowNull: false,
    },
    kickretFair: {
      type: DataTypes.INTEGER,
      field: 'kickret_fair',
      allowNull: false,
    },
    kickretOob: {
      type: DataTypes.INTEGER,
      field: 'kickret_oob',
      allowNull: false,
    },
    kickretRet: {
      type: DataTypes.INTEGER,
      field: 'kickret_ret',
      allowNull: false,
    },
    kickretTds: {
      type: DataTypes.INTEGER,
      field: 'kickret_tds',
      allowNull: false,
    },
    kickretTouchback: {
      type: DataTypes.INTEGER,
      field: 'kickret_touchback',
      allowNull: false,
    },
    kickretYds: {
      type: DataTypes.INTEGER,
      field: 'kickret_yds',
      allowNull: false,
    },
    passingAtt: {
      type: DataTypes.INTEGER,
      field: 'passing_att',
      allowNull: false,
    },
    passingCmp: {
      type: DataTypes.INTEGER,
      field: 'passing_cmp',
      allowNull: false,
    },
    passingCmpAirYds: {
      type: DataTypes.INTEGER,
      field: 'passing_cmp_air_yds',
      allowNull: false,
    },
    passingIncmp: {
      type: DataTypes.INTEGER,
      field: 'passing_incmp',
      allowNull: false,
    },
    passingIncmpAirYds: {
      type: DataTypes.INTEGER,
      field: 'passing_incmp_air_yds',
      allowNull: false,
    },
    passingInt: {
      type: DataTypes.INTEGER,
      field: 'passing_int',
      allowNull: false,
    },
    passingSk: {
      type: DataTypes.INTEGER,
      field: 'passing_sk',
      allowNull: false,
    },
    passingSkYds: {
      type: DataTypes.INTEGER,
      field: 'passing_sk_yds',
      allowNull: false,
    },
    passingTds: {
      type: DataTypes.INTEGER,
      field: 'passing_tds',
      allowNull: false,
    },
    passingTwopta: {
      type: DataTypes.INTEGER,
      field: 'passing_twopta',
      allowNull: false,
    },
    passingTwoptm: {
      type: DataTypes.INTEGER,
      field: 'passing_twoptm',
      allowNull: false,
    },
    passingTwoptmissed: {
      type: DataTypes.INTEGER,
      field: 'passing_twoptmissed',
      allowNull: false,
    },
    passingYds: {
      type: DataTypes.INTEGER,
      field: 'passing_yds',
      allowNull: false,
    },
    puntingBlk: {
      type: DataTypes.INTEGER,
      field: 'punting_blk',
      allowNull: false,
    },
    puntingI20: {
      type: DataTypes.INTEGER,
      field: 'punting_i20',
      allowNull: false,
    },
    puntingTot: {
      type: DataTypes.INTEGER,
      field: 'punting_tot',
      allowNull: false,
    },
    puntingTouchback: {
      type: DataTypes.INTEGER,
      field: 'punting_touchback',
      allowNull: false,
    },
    puntingYds: {
      type: DataTypes.INTEGER,
      field: 'punting_yds',
      allowNull: false,
    },
    puntretDowned: {
      type: DataTypes.INTEGER,
      field: 'puntret_downed',
      allowNull: false,
    },
    puntretFair: {
      type: DataTypes.INTEGER,
      field: 'puntret_fair',
      allowNull: false,
    },
    puntretOob: {
      type: DataTypes.INTEGER,
      field: 'puntret_oob',
      allowNull: false,
    },
    puntretTds: {
      type: DataTypes.INTEGER,
      field: 'puntret_tds',
      allowNull: false,
    },
    puntretTot: {
      type: DataTypes.INTEGER,
      field: 'puntret_tot',
      allowNull: false,
    },
    puntretTouchback: {
      type: DataTypes.INTEGER,
      field: 'puntret_touchback',
      allowNull: false,
    },
    puntretYds: {
      type: DataTypes.INTEGER,
      field: 'puntret_yds',
      allowNull: false,
    },
    receivingRec: {
      type: DataTypes.INTEGER,
      field: 'receiving_rec',
      allowNull: false,
    },
    receivingTar: {
      type: DataTypes.INTEGER,
      field: 'receiving_tar',
      allowNull: false,
    },
    receivingTds: {
      type: DataTypes.INTEGER,
      field: 'receiving_tds',
      allowNull: false,
    },
    receivingTwopta: {
      type: DataTypes.INTEGER,
      field: 'receiving_twopta',
      allowNull: false,
    },
    receivingTwoptm: {
      type: DataTypes.INTEGER,
      field: 'receiving_twoptm',
      allowNull: false,
    },
    receivingTwoptmissed: {
      type: DataTypes.INTEGER,
      field: 'receiving_twoptmissed',
      allowNull: false,
    },
    receivingYacYds: {
      type: DataTypes.INTEGER,
      field: 'receiving_yac_yds',
      allowNull: false,
    },
    receivingYds: {
      type: DataTypes.INTEGER,
      field: 'receiving_yds',
      allowNull: false,
    },
    rushingAtt: {
      type: DataTypes.INTEGER,
      field: 'rushing_att',
      allowNull: false,
    },
    rushingLoss: {
      type: DataTypes.INTEGER,
      field: 'rushing_loss',
      allowNull: false,
    },
    rushingLossYds: {
      type: DataTypes.INTEGER,
      field: 'rushing_loss_yds',
      allowNull: false,
    },
    rushingTds: {
      type: DataTypes.INTEGER,
      field: 'rushing_tds',
      allowNull: false,
    },
    rushingTwopta: {
      type: DataTypes.INTEGER,
      field: 'rushing_twopta',
      allowNull: false,
    },
    rushingTwoptm: {
      type: DataTypes.INTEGER,
      field: 'rushing_twoptm',
      allowNull: false,
    },
    rushingTwoptmissed: {
      type: DataTypes.INTEGER,
      field: 'rushing_twoptmissed',
      allowNull: false,
    },
    rushingYds: {
      type: DataTypes.INTEGER,
      field: 'rushing_yds',
      allowNull: false,
    },
  }, {
    schema: 'public',
    tableName: 'agg_play',
    timestamps: false,
  });
};

module.exports.initRelations = function initRelations() {
  delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
  const model = require('../index'); // eslint-disable-line global-require
  const AggPlay = model.AggPlay;
  const Play = model.Play;
  const Drive = model.Drive;
  const Game = model.Game;

  AggPlay.belongsTo(Play, {
    as: 'Gsis',
    foreignKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  AggPlay.belongsTo(Drive, {
    as: 'Gsis',
    foreignKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  AggPlay.belongsTo(Game, {
    as: 'Gsis',
    foreignKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });
};
